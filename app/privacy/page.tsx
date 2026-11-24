import Link from "next/link";
import { site } from "@/content/en/site";
import { pageMetadata } from "@/lib/seo";
import { isPlaceholder } from "@/lib/site";
import { Section, Placeholder } from "@/components/ui";
import { PageHero } from "@/components/PageHero";

/*
 * DRAFT: FOR OWNER REVIEW.
 * This is a basic starting point covering the contact form. It is not legal advice.
 * Review it (ideally with a lawyer) before launch, and update LAST_UPDATED when you do.
 */
const LAST_UPDATED = "November 24, 2026";

export const metadata = pageMetadata({
  title: "Privacy policy",
  description: "How HireGladd collects, uses and protects the information you send us through our contact form.",
  path: "/privacy/",
});

export default function PrivacyPage() {
  const email = isPlaceholder(site.contactEmail) ? null : site.contactEmail;
  const reachUs = email ? (
    <a href={`mailto:${email}`} className="font-medium text-accent underline underline-offset-2">{email}</a>
  ) : (
    <Link href="/contact/" className="font-medium text-accent underline underline-offset-2">our contact form</Link>
  );

  return (
    <>
      <PageHero title="Privacy policy" intro={`Last updated: ${LAST_UPDATED}`} />
      <Section>
        <div className="mx-auto max-w-3xl space-y-10 text-lg [&_h2]:text-2xl [&_h2]:font-bold [&_p]:mt-3 [&_p]:text-muted [&_ul]:mt-3 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6 [&_ul]:text-muted">
          <Placeholder>
            DRAFT FOR YOUR REVIEW. This is a basic policy covering the contact form. It isn&apos;t legal advice.
            Please review it, ideally with a lawyer, before launch. Edit it in app/privacy/page.tsx.
          </Placeholder>

          <div>
            <h2>Who we are</h2>
            <p>
              HireGladd (&ldquo;we&rdquo;, &ldquo;us&rdquo;) runs hiregladd.com. HireGladd is an EchelonFox company. This policy
              explains what we do with the information you send us through this website.
            </p>
          </div>

          <div>
            <h2>What we collect</h2>
            <p>When you fill out our contact form, we collect:</p>
            <ul>
              <li>Your name and company name</li>
              <li>Your industry and team size</li>
              <li>Your phone number and email address</li>
              <li>Anything you write in the message box</li>
            </ul>
            <p>
              Like most websites, our hosting provider may also record basic technical information, such as your IP
              address and browser type, to keep the site running and secure.
            </p>
          </div>

          <div>
            <h2>How we use it</h2>
            <p>We use the information you send only to:</p>
            <ul>
              <li>Reply to you and set up a call</li>
              <li>Talk with you about our services, if you asked about them</li>
              <li>Keep a record of our conversation</li>
            </ul>
            <p>We don&apos;t sell your information, and we don&apos;t share it with anyone for their own marketing.</p>
          </div>

          <div>
            <h2>Who else handles it</h2>
            <p>
              Our website is hosted by Netlify, which also receives and stores contact form submissions for us. We may
              also use email and calendar tools to reply to you and book calls. These providers handle your information
              only to provide their service to us.
            </p>
          </div>

          <div>
            <h2>How long we keep it</h2>
            <p>
              We keep contact form submissions only as long as we need them to talk with you, or as required by law.
              You can ask us to delete your information at any time.
            </p>
          </div>

          <div>
            <h2>Your choices</h2>
            <p>
              You can ask us to see, correct or delete the information you sent us. To do that, reach us through{" "}
              {reachUs}.
            </p>
          </div>

          <div>
            <h2>Cookies</h2>
            <p>
              This website doesn&apos;t use advertising or tracking cookies. If that changes, we&apos;ll update this
              policy.
            </p>
          </div>

          <div>
            <h2>Changes to this policy</h2>
            <p>If we change this policy, we&apos;ll post the new version here and update the date at the top.</p>
          </div>
        </div>
      </Section>
    </>
  );
}
