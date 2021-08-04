### Voting for links

There’s only one mutation left to be added: allowing users to vote for links. This follows a familiar path:

Run the following commands to generate the `Vote` model:

    bundle exec rails generate model Vote link:references user:references
    bundle exec rails db:migrate

This would create our vote model, which is used to represent an user vote.

    class Vote < ActiveRecord::Base
      belongs_to :user, validate: true
      belongs_to :link, validate: true
    end

Votes would be created by a mutation and represented by a GraphQL type.

Add the `VoteType` first:

    bundle exec rails generate graphql:object VoteType id:ID! user:UserType! link:LinkType!

Then define the `CreateVote` resolver:

    module Mutations
      class CreateVote < BaseMutation
        argument :link_id, ID, required: false

        type Types::VoteType

        def resolve(link_id: nil)
          Vote.create!(
            link: Link.find(link_id),
            user: context[:current_user]
          )
        end
      end
    end

Add `CreateVote` to the mutations list:

    module Types
      class MutationType < BaseObject
        field :create_user, mutation: Mutations::CreateUser
        field :create_link, mutation: Mutations::CreateLink
        field :create_vote, mutation: Mutations::CreateVote
        field :signin_user, mutation: Mutations::SignInUser
      end
    end

Done! Now you can vote on links:

![Vote on links](http://i.imgur.com/gHIj7ZW.png)

### Relating links with their votes

You can already create votes, but there’s currently no way to fetch them yet! A typical use case would be to get votes for each link using the existing `allLinks` query.

For that to work, you just have to change the `LinkType` to have references to its votes.

First, you need to add votes relationship to `Link` model:

    class Link < ApplicationRecord
      belongs_to :user, optional: true # Prevent ActiveRecord::RecordInvalid

      has_many :votes
    end

Now every link has access to its votes. But GraphQL still doesn’t know about those votes.

For that you have to expose votes from `LinkType`:

    module Types
      class LinkType < BaseObject
        field :id, ID, null: false
        field :url, String, null: false
        field :description, String, null: false
        field :posted_by, UserType, null: false, method: :user
        field :votes, [Types::VoteType], null: false
      end
    end

Now you can see all votes for links:

![Viewing all the votes](http://i.imgur.com/ZqezkWV.png)

### Relating users with their votes

Following these same steps, you could also add a new field to make it easier to find all the votes made by the same user.

Start with the `User` model:

    class User < ApplicationRecord
      has_secure_password

      validates :name, presence: true
      validates :email, presence: true, uniqueness: true

      has_many :votes
      has_many :links
    end

Then add “votes” to the `UserType`:

    module Types
      class UserType < BaseObject
        field :id, ID, null: false
        field :created_at, DateTimeType, null: false
        field :name, String, null: false
        field :email, String, null: false
        field :votes, [VoteType], null: false
        field :links, [LinkType], null: false
      end
    end

Now you can see all votes for users:

![see all votes for users](http://i.imgur.com/Dhsy92u.png)
