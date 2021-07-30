---
title: Use the Git and GitHub starter assignment
intro: 'You can use the Git & {% data variables.product.company_short %} starter assignment to give students an overview of Git and {% data variables.product.company_short %} fundamentals.'
versions:
  fpt: '*'
redirect_from:
  - /education/manage-coursework-with-github-classroom/use-the-git-and-github-starter-assignment
shortTitle: Starter assignment
---

{% note %}

**Note:** The Git & {% data variables.product.company_short %} starter assignment is in beta and subject to change.

{% endnote %}

The Git & {% data variables.product.company_short %} starter assignment is a pre-made course that summarizes the basics of Git and {% data variables.product.company_short %} and links students to resources to learn more about specific topics.

## Prerequisites

{% data reusables.classroom.assignments-classroom-prerequisite %}

## Creating the starter assignment

### If there are no existing assignments in the classroom

1. Sign into {% data variables.product.prodname_classroom_with_url %}.
2. Navigate to a classroom.
3. In the {% octicon "repo" aria-label="The repo icon" %} **Assignments** tab, click  **Use starter assignment**.

<div class="procedural-image-wrapper">
  <img alt="Creating your first assignment" class="procedural-image-wrapper" src="/assets/images/help/classroom/assignments-create-first-assignment.png">
</div>

### If there already are existing assignments in the classroom

1. Sign into {% data variables.product.prodname_classroom_with_url %}.
2. Navigate to a classroom.
3. In the {% octicon "repo" aria-label="The repo icon" %} **Assignments** tab, click the link on the blue banner.

<div class="procedural-image-wrapper">
  <img alt="The 'New assignment' button" class="procedural-image-wrapper" src="/assets/images/help/classroom/assignments-click-new-starter-assignment-button.png">
</div>

## Setting up the basics for an assignment

Import the starter course into your organization, name your assignment, decide whether to assign a deadline, and choose the visibility of assignment repositories.

- [Importing the assignment](#importing-the-assignment)
- [Naming an assignment](#naming-an-assignment)
- [Assigning a deadline for an assignment](#assigning-a-deadline-for-an-assignment)
- [Choosing an assignment type](#choosing-an-assignment-type)
- [Choosing a visibility for assignment repositories](#choosing-a-visibility-for-assignment-repositories)

### Importing the assignment

You first need to import the Git & {% data variables.product.product_name %} starter assignment into your organization.

<div class="procedural-image-wrapper">
  <img alt="The `Import the assignment` button" class="procedural-image-wrapper" src="/assets/images/help/classroom/assignments-import-starter-assignment.png">
</div>

### Naming the assignment

For an individual assignment, {% data variables.product.prodname_classroom %} names repositories by the repository prefix and the student's {% data variables.product.product_name %} username. By default, the repository prefix is the assignment title. For example, if you name an assignment "assignment-1" and the student's username on {% data variables.product.product_name %} is @octocat, the name of the assignment repository for @octocat will be `assignment-1-octocat`.

{% data reusables.classroom.assignments-type-a-title %}

### Assigning a deadline for an assignment

{% data reusables.classroom.assignments-guide-assign-a-deadline %}

### Choosing a visibility for assignment repositories

The repositories for an assignment can be public or private. If you use private repositories, only the student can see the feedback you provide. Under "Repository visibility," select a visibility.

When you're done, click **Continue**. {% data variables.product.prodname_classroom %} will create the assignment and bring you to the assignment page.

<div class="procedural-image-wrapper">
  <img alt="'Continue' button" class="procedural-image-wrapper" src="/assets/images/help/classroom/assignments-click-continue-button.png">
</div>

## Inviting students to an assignment

{% data reusables.classroom.assignments-guide-invite-students-to-assignment %}

You can see whether a student has joined the classroom and accepted or submitted an assignment in the **All students** tab for the assignment. {% data reusables.classroom.assignments-to-prevent-submission %}

<div class="procedural-image-wrapper">
  <img alt="Individual assignment" class="procedural-image-wrapper" src="/assets/images/help/classroom/assignment-individual-hero.png">
</div>

The Git & {% data variables.product.company_short %} starter assignment is only available for individual students, not for groups. Once you create the assignment, students can start work on the assignment.

## Next steps

- Make additional assignments customized to your course. For more information, see "[Create an individual assignment](/education/manage-coursework-with-github-classroom/create-an-individual-assignment)" and "[Create a group assignment](/education/manage-coursework-with-github-classroom/create-a-group-assignment)."

## Further reading

- "[Use {% data variables.product.prodname_dotcom %} in your classroom and research](/education/explore-the-benefits-of-teaching-and-learning-with-github-education/use-github-in-your-classroom-and-research)"
- "[Connect a learning management system to {% data variables.product.prodname_classroom %}](/education/manage-coursework-with-github-classroom/connect-a-learning-management-system-to-github-classroom)"
