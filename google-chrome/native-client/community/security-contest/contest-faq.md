---json {"title":"Security Contest FAQ"} ---

{% include 'partials/nacl-warning.njk' %}

---

The Native Client Security Contest has ended—check out the <a href="/docs/native-client/community/security-contest/index#contest-winners" class="reference internal"><em>winning submissions</em></a>. We welcome your continued involvement in the project. You can help by submitting <a href="http://code.google.com/p/nativeclient/issues/list" class="reference external">bugs</a> and participating in the <a href="http://groups.google.com/group/native-client-discuss" class="reference external">Native Client discussion group</a>.

This FAQ is provided for reference only. For the complete official contest rules, see the Terms and Conditions.

- <a href="#what-is-this-contest-about" id="id1" class="reference internal">What is this contest about?</a>
- <a href="#where-can-i-get-more-information-on-native-client" id="id2" class="reference internal">Where can I get more information on Native Client?</a>
- <a href="#what-people-are-you-looking-for" id="id3" class="reference internal">What people are you looking for?</a>
- <a href="#how-do-i-sign-up" id="id4" class="reference internal">How do I sign up?</a>
- <a href="#what-is-the-process-of-participating" id="id5" class="reference internal">What is the process of participating?</a>
- <a href="#how-many-prizes-are-there-what-are-the-prizes" id="id6" class="reference internal">How many prizes are there? What are the prizes?</a>
- <a href="#can-i-sign-up-as-a-team-how-many-people-can-be-a-member-of-my-team" id="id7" class="reference internal">Can I sign up as a team? How many people can be a member of my team?</a>
- <a href="#what-will-i-need-to-do-to-win" id="id8" class="reference internal">What will I need to do to win?</a>
- <a href="#who-is-going-to-judge-these-entries-who-are-these-people" id="id9" class="reference internal">Who is going to judge these entries? Who are these people?</a>
- <a href="#when-can-i-start-submitting-issues" id="id10" class="reference internal">When can I start submitting issues?</a>
- <a href="#registration-does-not-work-for-me-what-can-i-do" id="id11" class="reference internal">Registration does not work for me—what can I do?</a>
- <a href="#i-registered-as-a-team-but-i-want-to-change-the-team-composition-by-adding-or-removing-members-what-should-i-do" id="id12" class="reference internal">I registered as a team but I want to change the team composition by adding or removing members. What should I do?</a>
- <a href="#i-have-a-previous-engagement-and-i-cannot-sign-up-until-after-the-competition-starts-is-this-ok" id="id13" class="reference internal">I have a previous engagement and I cannot sign up until after the competition starts. Is this ok?</a>
- <a href="#my-team-has-accepted-the-terms-and-conditions-except-for-one-person-who-is-unavailable-whose-email-was-misspelled-etc-what-can-i-do" id="id14" class="reference internal">My team has accepted the Terms and Conditions except for one person who is unavailable / whose email was misspelled / etc. What can I do?</a>
- <a href="#can-i-enter-multiple-times" id="id15" class="reference internal">Can I enter multiple times?</a>
- <a href="#why-do-you-need-a-prize-recipient" id="id16" class="reference internal">Why do you need a prize recipient?</a>
- <a href="#we-want-to-change-the-prize-recipient-what-can-we-do" id="id17" class="reference internal">We want to change the prize recipient. What can we do?</a>
- <a href="#i-want-to-remain-anonymous-during-the-contest-is-this-possible" id="id18" class="reference internal">I want to remain anonymous during the contest. Is this possible?</a>
- <a href="#one-of-my-professors-friends-is-a-judge-can-i-participate" id="id19" class="reference internal">One of my professors / friends is a judge. Can I participate?</a>
- <a href="#can-my-company-be-registered-as-an-entrant" id="id20" class="reference internal">Can my company be registered as an entrant?</a>
- <a href="#i-never-signed-up-for-this-contest-but-i-got-an-email-from-you-what-is-this-about" id="id21" class="reference internal">I never signed up for this contest, but I got an email from you. What is this about?</a>
- <a href="#i-tried-to-sign-up-and-it-seems-someone-who-wants-to-be-a-member-of-my-team-has-already-registered-with-another-team-what-can-we-do" id="id22" class="reference internal">I tried to sign up and it seems someone who wants to be a member of my team has already registered with another team. What can we do?</a>
- <a href="#i-lost-or-never-got-the-email-asking-me-to-confirm-the-terms-and-conditions-what-can-i-do" id="id23" class="reference internal">I lost or never got the email asking me to confirm the Terms and Conditions. What can I do?</a>
- <a href="#one-of-our-team-members-rejected-the-terms-and-conditions-what-can-we-do" id="id24" class="reference internal">One of our team members rejected the Terms and Conditions. What can we do?</a>
- <a href="#how-are-you-going-to-evaluate-the-submissions" id="id25" class="reference internal">How are you going to evaluate the submissions?</a>
- <a href="#can-i-include-issues-i-submitted-before-the-contest" id="id26" class="reference internal">Can I include issues I submitted before the contest?</a>
- <a href="#what-is-the-difference-between-exploit-issue-and-summary" id="id27" class="reference internal">What is the difference between exploit, issue and summary?</a>
- <a href="#what-issues-should-i-include-in-the-summary" id="id28" class="reference internal">What issues should I include in the summary?</a>
- <a href="#why-are-you-asking-for-the-top-10-issues-only" id="id29" class="reference internal">Why are you asking for the top 10 issues only?</a>
- <a href="#my-english-is-not-great-will-this-count-against-me-in-the-judging-process" id="id30" class="reference internal">My English is not great—will this count against me in the judging process?</a>
- <a href="#what-information-do-i-need-to-include-in-the-issue-submission" id="id31" class="reference internal">What information do I need to include in the issue submission?</a>
- <a href="#how-do-i-contest-a-decision-that-a-bug-is-a-duplicate" id="id32" class="reference internal">How do I contest a decision that a bug is a duplicate?</a>
- <a href="#why-is-the-native-client-team-updating-the-source-code-during-the-contest" id="id33" class="reference internal">Why is the Native Client team updating the source code during the contest?</a>
- <a href="#i-forgot-to-include-something-in-the-summary-what-can-i-do" id="id34" class="reference internal">I forgot to include something in the summary—what can I do?</a>
- <a href="#someone-from-our-team-submitted-a-summary-on-behalf-of-our-team-without-consulting-with-everyone-else-how-can-we-ensure-that-the-judges-will-use-the-previous-summary-and-not-the-last-one" id="id35" class="reference internal">Someone from our team submitted a summary on behalf of our team without consulting with everyone else. How can we ensure that the judges will use the previous summary and not the last one?</a>
- <a href="#will-you-be-evaluating-each-exploit-separately-for-every-one-of-the-criteria" id="id36" class="reference internal">Will you be evaluating each exploit separately for every one of the criteria?</a>
- <a href="#i-only-found-one-exploit-but-i-think-it-is-very-good-can-i-still-win" id="id37" class="reference internal">I only found one exploit but I think it is very good. Can I still win?</a>
- <a href="#how-are-you-going-to-pick-the-winners" id="id38" class="reference internal">How are you going to pick the winners?</a>
- <a href="#when-and-how-are-we-going-to-find-out-the-results-of-the-contest" id="id39" class="reference internal">When and how are we going to find out the results of the contest?</a>
- <a href="#what-will-google-do-with-my-data" id="id40" class="reference internal">What will Google do with my data?</a>
- <a href="#i-have-more-questions-where-can-i-get-a-response" id="id41" class="reference internal">I have more questions—where can I get a response?</a>
- <a href="#i-like-this-project-are-you-hiring-people-to-work-on-it-full-time" id="id42" class="reference internal">I like this project. Are you hiring people to work on it full time?</a>
- <a href="#how-can-i-get-involved-in-this-project-besides-the-contest" id="id43" class="reference internal">How can I get involved in this project besides the contest?</a>
- <a href="#why-is-my-country-province-excluded-from-the-contest" id="id44" class="reference internal">Why is my country/province excluded from the contest?</a>

## What is this contest about?

We launched this contest in order to help make Native Client more secure. We invite participants to discover security bugs in our technology in order to compete to win cash prizes.

## Where can I get more information on Native Client?

You can read our <a href="http://static.googleusercontent.com/external_content/untrusted_dlcp/research.google.com/en/us/pubs/archive/34913.pdf" class="reference external">research paper</a> (PDF) or visit the site for the <a href="http://code.google.com/p/nativeclient" class="reference external">Native Client open-source project</a>.

## What people are you looking for?

We are not looking for any particular participant profile. Everyone who is eligible to participate based on the <a href="/docs/native-client/community/security-contest/contest-terms" class="reference internal"><em>Terms and Conditions</em></a> of the contest can sign up.

## How do I sign up?

The first thing you need to do is to register. Then you and your team members (if any) will receive an email from our team asking you to review and accept the <a href="/docs/native-client/community/security-contest/contest-terms" class="reference internal"><em>Terms and Conditions</em></a>:doc:\` of the contest &lt;contest-terms&gt;\`. Once everyone from your team has accepted the <a href="/docs/native-client/community/security-contest/contest-terms" class="reference internal"><em>Terms and Conditions</em></a> you can start submitting bugs through the Native Client issue tracker. You should not submit any bugs as part of your contest entries until everyone on your team has accepted the <a href="/docs/native-client/community/security-contest/contest-terms" class="reference internal"><em>Terms and Conditions</em></a>, as those bugs will not be eligible for consideration in the contest.

## What is the process of participating?

After you register yourself or your team and every member of your team has accepted the <a href="/docs/native-client/community/security-contest/contest-terms" class="reference internal"><em>Terms and Conditions</em></a>, download the latest build of Native Client, attack it, and identify security exploits. Submit these bugs through our Native Client Issue Tracker as quickly as you can, as you will only get credit for exploits that are first reported by yourself or your team. Before the end of the contest, you will need to submit a summary with the top 10 exploits you identified. Our judges will review submitted summaries and will select the top 5 contestants.

## <span id="contest-faq-prizes"></span>How many prizes are there? What are the prizes?

There are five cash prizes: The first prize is $8,192, the second prize $4,096, the third prize is $2,048, the fourth prize is $1,024 and the fifth prize is $1,024. All amounts are in USD.

## Can I sign up as a team? How many people can be a member of my team?

You can sign up as a team. There is no limit to how many people can participate in your team. However we recommend that you keep the size of your team small so as to be able to better coordinate during the contest.

## What will I need to do to win?

To participate, you will need to test the Native Client builds, identify security exploits which affect the current Native Client build at the time of submission and report them to our team. Our judges will review your entry. If you are one of the top five participants selected by the judges and satisfy the requirements for eligibility, then you will win a cash prize. For more information on how to participate and how your entry will be evaluated please review our detailed <a href="/docs/native-client/community/security-contest/contest-terms" class="reference internal"><em>Terms and Conditions</em></a>.

## Who is going to judge these entries? Who are these people?

Google has recruited a group of distinguished security experts to serve as judges for this contest:

- Edward Felten — jury chair (Princeton)
- Alex Halderman (Michigan)
- Brad Karp (University College London)
- Greg Morrisett (Harvard)
- Niels Provos (Google)
- Stefan Savage (UCSD)
- Dan Wallach (Rice)
- Bennet Yee (Google)
- Nickolai Zeldovich (MIT)

Check out the <a href="/docs/native-client/community/security-contest/index#contest-judges" class="reference internal"><em>Judges info</em></a> to learn more about their careers and contributions to the security community.

## When can I start submitting issues?

You can start submitting issues after you and your team members (if any) have completed the registration process and accepted the <a href="/docs/native-client/community/security-contest/contest-terms" class="reference internal"><em>Terms and Conditions</em></a>.

## Registration does not work for me—what can I do?

We recommend that you post this problem at the Google Group. Once you do so, a member from our team will reach out to you to try to diagnose the issue. We will try to help you out; keep in mind though that we can not be responsible for the inability of a participant to register.

## I registered as a team but I want to change the team composition by adding or removing members. What should I do?

Please reply to one of the registration email messages you received (it should be sent to <a href="mailto:nacl-security-contest%40google.com" class="reference external">nacl-security-contest<span>@</span>google<span>.</span>com</a>) and indicate the changes you’d like to make. Please note that neither the team name nor team membership can be changed once all members have accepted the <a href="/docs/native-client/community/security-contest/contest-terms" class="reference internal"><em>Terms and Conditions</em></a>.

## I have a previous engagement and I cannot sign up until after the competition starts. Is this ok?

You can sign up until the last day of the contest May 5th, 2009. However, keep in mind that while you can submit bugs through the Native Client Issue Tracker, none of these will be taken into account unless you (and all your team members) have completed the registration process prior to submitting any bugs.

## My team has accepted the Terms and Conditions except for one person who is unavailable / whose email was misspelled / etc. What can I do?

To make edits to your team’s composition, or to update the contact information of a team member, you will need to reply to one of the registration emails you received (it should be sent to <a href="mailto:nacl-security-contest%40google.com" class="reference external">nacl-security-contest<span>@</span>google<span>.</span>com</a>) and indicate the changes you’d like to make. Please note that this will mean that your team members will receive an email notifying them of the changes in the team’s composition and asking them to re-accept the <a href="/docs/native-client/community/security-contest/contest-terms" class="reference internal"><em>Terms and Conditions</em></a>. All team members will need to re-accept the <a href="/docs/native-client/community/security-contest/contest-terms" class="reference internal"><em>Terms and Conditions</em></a> for the team to be considered as active.

## Can I enter multiple times?

No, you cannot enter multiple times. If you register as an individual you can not also register on a team and if you are on a team you can not also be on another team.

## Why do you need a prize recipient?

Google will not be responsible for the division of any prize money between members of a potential winning team. Instead Google will deliver the prize to one member indicated by the team. The team is solely responsible for managing the logistics of distributing the prize among team members. This is why Google asks all participating teams to identify a prize recipient.

## We want to change the prize recipient. What can we do?

To make edits to the prize recipient before all team members have accepted the <a href="/docs/native-client/community/security-contest/contest-terms" class="reference internal"><em>Terms and Conditions</em></a>, you will need to reply to one of the registration emails you received (it should be sent to <a href="mailto:nacl-security-contest%40google.com" class="reference external">nacl-security-contest<span>@</span>google<span>.</span>com</a>) and indicate the changes you’d like to make. Please note that this will mean that your team members will receive an email notifying them of the change and asking them to re-accept the <a href="/docs/native-client/community/security-contest/contest-terms" class="reference internal"><em>Terms and Conditions</em></a>. All team members will need to re-accept the <a href="/docs/native-client/community/security-contest/contest-terms" class="reference internal"><em>Terms and Conditions</em></a> for the team to be considered registered. After all team members have accepted the <a href="/docs/native-client/community/security-contest/contest-terms" class="reference internal"><em>Terms and Conditions</em></a>, there can be no changes to the prize recipient.

## I want to remain anonymous during the contest. Is this possible?

Yes. However, you will still need to provide us with your email address to register. After the contest ends and if you are one of the top 5 participants, to claim your prize, you and all of your team members (if any) will need to submit to Google all necessary tax and legal information that Google will need to comply with US and international legal and tax regulations.

## One of my professors / friends is a judge. Can I participate?

Yes, you can participate.

## Can my company be registered as an entrant?

No, this is not possible under our <a href="/docs/native-client/community/security-contest/contest-terms" class="reference internal"><em>Terms and Conditions</em></a>.

## I never signed up for this contest, but I got an email from you. What is this about?

You have probably received an e-mail identifying you as a member of team that another person has created. In our email, we identified the email address of a person who registered you as a teammate in the Native Client Security Contest. If you want to participate in this person’s team, then accept the <a href="/docs/native-client/community/security-contest/contest-terms" class="reference internal"><em>Terms and Conditions</em></a> by clicking on the link included in the email. If you do not wish to participate in the contest or you want to do so as a member of a different team, then you can remove yourself from the list of team members of that particular team.

## I tried to sign up and it seems someone who wants to be a member of my team has already registered with another team. What can we do?

If everyone in your potential teammate’s original team (including themselves) has accepted the <a href="/docs/native-client/community/security-contest/contest-terms" class="reference internal"><em>Terms and Conditions</em></a> of the contest, then unfortunately you will have to look for other potential partners. Otherwise, your potential teammate can remove themselves from the other team. All they will need to do is to reply to one of the registration emails they received (it should be sent to <a href="mailto:nacl-security-contest%40google.com" class="reference external">nacl-security-contest<span>@</span>google<span>.</span>com</a>) and indicate the changes to be made. Please note that this will mean that their team members will receive an email notifying them of the changes in the team’s composition and asking them to re-accept the <a href="/docs/native-client/community/security-contest/contest-terms" class="reference internal"><em>Terms and Conditions</em></a>. All team members of that team will need to re-accept the <a href="/docs/native-client/community/security-contest/contest-terms" class="reference internal"><em>Terms and Conditions</em></a> for that team to be considered as active.

## I lost or never got the email asking me to confirm the Terms and Conditions. What can I do?

Don’t worry, just send us an email at <a href="mailto:nacl-security-contest%40google.com" class="reference external">nacl-security-contest<span>@</span>google<span>.</span>com</a> and we will send you the link you need.

## One of our team members rejected the Terms and Conditions. What can we do?

Your team is now considered to be invalid. If this rejection happened by accident, please restart the registration process. If it was deliberate then create a new team with teammates who are willing to accept the <a href="/docs/native-client/community/security-contest/contest-terms" class="reference internal"><em>Terms and Conditions</em></a>. No one can participate in the contest unless they have accepted the <a href="/docs/native-client/community/security-contest/contest-terms" class="reference internal"><em>Terms and Conditions</em></a> and no team can participate unless all team members have accepted the <a href="/docs/native-client/community/security-contest/contest-terms" class="reference internal"><em>Terms and Conditions</em></a>.

## How are you going to evaluate the submissions?

The judges will evaluate each Summary based on the following criteria: a) Quality (Severity, Scope, Reliability and Style) and b) Quantity. Please review the judging criteria in the contest <a href="/docs/native-client/community/security-contest/contest-terms" class="reference internal"><em>Terms and Conditions</em></a> for more information.

## Can I include issues I submitted before the contest?

No, you can not.

## What is the difference between exploit, issue and summary?

An exploit becomes an issue once you submit it through the Native Client issue tracker. A summary can include multiple issues but not more than 10.

## What issues should I include in the summary?

You should include a maximum of 10 issues that you and your team members (if any) submitted to the Native Client Issue tracker. We recommend that you carefully review the judging criteria in the <a href="/docs/native-client/community/security-contest/contest-terms" class="reference internal"><em>Terms and Conditions</em></a> to identify which bugs are more likely to be perceived as high impact from our judges and could help you win one of the five cash prizes. Do not include issues that have been marked as duplicates or unverifiable, as these will not be taken into account by our judges.

## Why are you asking for the top 10 issues only?

We want to make sure that we use our judges’ time wisely. Rather than having them review hundreds of similar or small scale bugs, sometimes identified with the same automatic process, we are limiting the number of issues that each participant can submit in their summary.

## My English is not great—will this count against me in the judging process?

Entries in languages other than in English or entries that are deemed incomprehensible by the judges will not be reviewed. We do not plan to penalize summaries for spelling or grammar mistakes, but please make your descriptions as clear as possible.

## What information do I need to include in the issue submission?

Please review the “Minimum requirements for issues” section of contest’s <a href="/docs/native-client/community/security-contest/contest-terms" class="reference internal"><em>Terms and Conditions</em></a>. You will find a list of all the information you will need to include in every submitted issue. Failure to provide this information might make the submitted issue invalid for the purposes of this contest.

## How do I contest a decision that a bug is a duplicate?

Please highlight this in our Google Group and a member of our team will get in touch with you.

## Why is the Native Client team updating the source code during the contest?

We are updating Native Client’s source code to fix bugs reported by contest participants or exploits identified by our team. Our goal is to protect contestants and other users of the Native Client software from exploits that could damage their system. In addition, by updating our builds, we will be providing you with more opportunities to find new security bugs. Finally, we believe this will make the contest more interesting by continuously raising the bar of bug finding.

## I forgot to include something in the summary—what can I do?

If the contest has not ended, you may submit an updated summary. You may not submit an updated summary once the contest has ended.

## Someone from our team submitted a summary on behalf of our team without consulting with everyone else. How can we ensure that the judges will use the previous summary and not the last one?

If your team member submitted their version of the team’s summary before the end date of the contest, and if this is the last summary that was submitted from your team, then the Judges will disregard all previous versions of your summary and will only review this last one. If the contest has not ended, you may resubmit a previous summary to override the first.

## Will you be evaluating each exploit separately for every one of the criteria?

We will use our criteria to evaluate submitted summaries, not individual exploits.

## I only found one exploit but I think it is very good. Can I still win?

Yes. Quantity is only one of the criteria we use to evaluate submitted summaries.

## How are you going to pick the winners?

After the contest ends, all submitted Summaries will be judged by a panel of at least three judges. The judges will evaluate each Summary based on the following criteria: a) Quality (Severity, Scope, Reliability and Style) and b) Quantity. Each panel will evaluate a number of the submitted summaries and will select the highest ranking Summaries to move to the next level of judging. Those top Summaries will then be evaluated by all Judges using the same Criteria, and the top five Summaries will be selected as potential winners. For more information on the judging criteria and the judging process please review the relevant section of the <a href="/docs/native-client/community/security-contest/contest-terms" class="reference internal"><em>Terms and Conditions</em></a>.

## When and how are we going to find out the results of the contest?

We will contact all prospective winners at the email address provided to us at the registration process. You may request a list of winners after December 7th, 2009 by writing to: Native Client Security Contest Google Inc. 1600 Amphitheater Parkway Mountain View, CA 94043 USA

## What will Google do with my data?

The personal data you provided to Google during the Contest will be stored and processed in the US within the context of the Contest. We will maintain your data in the way described at the Google Privacy Policy found at <a href="http://www.google.com/privacypolicy.html" class="reference external">http://www.google.com/privacypolicy.html</a>. Google may use your data to verify your identity, postal address and telephone number in the event you qualify for a prize. You have a right to access and withdraw your personal data. To exercise this right, you may write to: Native Client Security Contest, Google Inc., 1600 Amphitheater Parkway, Mountain View, CA 94043, USA.

## I have more questions—where can I get a response?

We recommend to ask any additional questions you might have in the Google Group. Members from our team will be monitoring the group and will respond to your question there, to benefit other contest participants.

## I like this project. Are you hiring people to work on it full time?

At Google we are always looking for great people. Please review our current openings at www.google.com/jobs.

## How can I get involved in this project besides the contest?

Thank you for your interest in Native Client. You can help us by:

- Identifying bugs
- Porting OS libraries
- Writing apps

We would also like to see you participate in our discussion group.

## Why is my country/province excluded from the contest?

While we seek to make this contest open worldwide, we cannot open it to residents of Cuba, Iran, Syria, North Korea, Sudan, or Myanmar (Burma) because of U.S. laws. In addition, the contest is not open to residents of Brazil, Italy, or Quebec because of local restrictions. For more information on eligibility, see the <a href="/docs/native-client/community/security-contest/contest-terms" class="reference internal"><em>Terms and Conditions</em></a>.
