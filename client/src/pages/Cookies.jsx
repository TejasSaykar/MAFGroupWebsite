import React from "react";
import Layout from "../components/Layout";
import { Link } from "react-router-dom";

const Cookies = () => {
  return (
    <Layout title={"MAF | Cookies"}>
      <div className="w-full mt-[4rem]">
        <div className="w-[90%] lg:w-[80%] m-auto pt-5">
          <h1 className="text-3xl font-bold text-[#071b52] dark:text-rose-600">
            What About Cookies?
          </h1>
          <p className="py-3 text-xl font-light">
            Please read our Cookie Policy.
          </p>

          <div className="mt-3">
            <h1 className="text-2xl font-semibold text-[#071b52] dark:text-rose-600 py-2">
              Security of Your Data
            </h1>
            <p className="text-xl font-light">
              You can be assured that we will hold your data securely. We will
              ensure no unauthorized disclosure or no one who has not authorized
              access to your information will be able to access it by constantly
              implementing strong electronic security and physical safeguards.
              Furthermore, your personal data will be used per the latest Data
              Protection Regulations.
            </p>
          </div>

          <div className="mt-3">
            <h2 className="text-2xl font-semibold pt-3 text-[#071b52] dark:text-rose-600">
              What Are Your Legal Rights?
            </h2>
            <p className="text-xl font-light py-2">
              In specific circumstances, you have the rights per the data
              protection laws you can use. Here are some of them.
            </p>
          </div>

          <ul className="flex flex-col gap-2 pl-5 text-lg font-light">
            <li>
              • You are free to request access to your personal data or data
              subject access request.
            </li>
            <li>
              • You have the right to request correction of the personal data we
              have on you. You can get the data corrected, and we will verify
              the accuracy of the data corrections you are asking us to make.
            </li>
            <li>
              • You can even request that we erase your personal data if you
              feel that we are holding it can impact your fundamental rights and
              freedom.
            </li>
            <li>
              • You also have the right to object if we process your personal
              data for direct marketing purposes.
            </li>
            <li>
              • You can also request restrictions on the way we process your
              personal data.
            </li>
            <li>
              • You can request the transfer of your personal data we have to
              you or a third party. This right only applies to automated
              information provided by you or the information we used to initiate
              a contract with you.
            </li>
            <li>
              • You can also withdraw consent at any time in cases where we rely
              on your consent to process your personal data.
            </li>
            <p>
              • If you want to exercise any of these rights, please get in touch
              with us.
            </p>
          </ul>

          <div className="mt-5 flex flex-col gap-3">
            <h2 className="text-2xl font-bold text-[#071b52] dark:text-rose-600">
              Cookie Policy
            </h2>
            <h3 className="text-xl font-semibold text-[#071b52] dark:text-rose-600">
              Effective date: January 1, 2022
            </h3>
            <p className="text-lg font-light">
              MAF Group understands that your privacy is important to you. So,
              we do our best to be open to you about our technologies. In this
              Cookie Policy, we have explained why and how cookies, pixels, web
              beacons, clear gifs, and other technologies, which are known as
              Cookies and other tracking technologies, might be stored on your
              device, or accessed from it whenever you use MAF Group website.
              Read on to know more.
            </p>
          </div>

          <div className="mt-5">
            <h2 className="text-2xl font-semibold text-[#071b52] dark:text-rose-600">
              What are Cookies? What Other Tracking Technologies Do We Use?
            </h2>
            <p className="text-xl font-light">
              A cookie is a small text file that can be accessed from your
              device or stored on it when you visit the MAF Group website to the
              extent you agree. Several similar technologies place small files
              on your devices or monitor your activity on the website to ensure
              that we know how you use our website. By knowing how you use our
              website, we can recognize your device in the future. To know more
              about cookies and other tracking technologies, visit
              <Link
                className="text-sky-600 underline px-1"
                href="www.allaboutcookies.org"
                target="_blanck"
              >
                www.allaboutcookies.org
              </Link>
              and{" "}
              <Link
                href="www.youronlinechoices.eu"
                target="_blanck"
                className="text-sky-600 underline"
              >
                www.youronlinechoices.eu
              </Link>
              .
            </p>
          </div>

          <div className="mt-5">
            <h2 className="text-2xl font-semibold text-[#071b52] dark:text-rose-600">
              How MAF Group Uses Cookies and Other Similar Tracking
              Technologies?
            </h2>
            <p className="py-2 text-xl font-light">
              MAF Group uses cookies and other tracking technologies to know you
              better and identify your interests. It helps us to remember your
              preferences on our website. It also allows us to control access to
              certain content available on our website, protect our website, and
              to process any requests you make from us.
            </p>
            <p className=" text-xl font-light">
              To administer our sites and for research purposes, MAF Group has
              contracted with third-party service providers who not only track
              but also analyze statistical usage and volume information from the
              people who visit MAF Group. The third-party service providers
              usually use cookies that allow us to improve the user experience,
              analyze how a user navigates the site, how they utilize it, and
              manage our website content in a better manner.
            </p>
          </div>

          <div className="mt-5">
            <h2 className="text-2xl font-semibold text-[#071b52] dark:text-rose-600">
              What are First- and Third-Party Cookies?
            </h2>
            <p className="py-2 text-xl font-light">
              First-party cookies are those which MAF Group uses and placed on
              your device, while third-party cookies are those placed on your
              device by a third party while you visit our website. We might
              contract with third-party service providers and send emails to
              users who have shared their contact information with MAF Group.
              The third-party service providers may place cookies on your device
              to help us measure and enhance the effectiveness of our email
              communication. They might also do it to know whether messages we
              send have been opened or the links in the messages have been
              clicked on or not.
            </p>
            <p className=" text-xl font-light">
              To know more about how third-party companies use and collect
              information on MAF Group's behalf, please refer to their privacy
              policies.
            </p>
          </div>

          <div className="mt-5">
            <h1 className="text-2xl font-bold text-[#071b52] dark:text-rose-600">
              What Types of Cookies Do We Use?
            </h1>
            <h3 className="text-2xl font-semibold text-[#071b52] dark:text-rose-600 py-2">
              Persistent Cookies
            </h3>
            <p className="text-xl font-light">
              These cookies aim to collect information regarding a visitor's
              activities on the MAF Group website so that a visitor can be
              offered targeted advertising. MAF Group might allow the
              third-party service providers to use cookies on the MAF Group
              website for that same aim and let them collect information
              regarding your online activities across different websites and
              over time. Some third-party service providers could be Google,
              Facebook, Twitter, etc., You are urged to read their privacy
              policies for more information. They might use their cookies to
              target advertising to you when you visit other websites after
              visiting the MAF Group website.
            </p>
          </div>

          <div className="mt-5">
            <h2 className="text-2xl font-semibold text-[#071b52] dark:text-rose-600">
              How to Refuse Cookies or Withdraw Consent to Using Cookies?
            </h2>
            <p className="text-xl font-light py-2">
              If you don't want the MAF Group website or the third-party service
              providers to drop cookies on your device, you can adjust the
              settings in your browser to reject some or all cookies. You can
              also ensure you are alerted when a cookie is placed on your
              device. To know more, kindly visit the help section of your
              browser. Do remember that if you refuse cookies or withdraw
              consent to using cookies, you might not be able to access the MAF
              Group website or use all or parts or functionalities of the MAF
              Group website.
            </p>
            <p className="text-xl font-light">
              To remove the cookies that were previously stored on your device,
              you can manually delete them. It will not prevent websites like
              the MAF Group website from placing them again on your device.
            </p>
            <p className="text-xl font-light pt-2">
              To learn more about cookies, please visit
              <a
                className="text-sky-600 underline px-1"
                href="www.youronlinechoices.eu"
              >
                www.youronlinechoices.eu
              </a>
              if you are in Europe. You can visit
              <a
                className="text-sky-600 px-1 underline"
                href="www.aboutads.info/choices"
              >
                www.aboutads.info/choices
              </a>
              if you are in the United States.
            </p>
          </div>

          <div className="mt-5">
            <h2 className="text-2xl font-semibold text-[#071b52] dark:text-rose-600">
              How Does MAF Group Use Other Tracking Technologies in
              Communications?
            </h2>
            <p className="py-2 text-xl font-light">
              MAF Group's website might collect information regarding whether
              you open any links that are in the knowledge, research, or event
              communications that we send to you through web beacons. Yes, we
              use web beacons.
            </p>
            <p className=" text-xl font-light">
              A web beacon is a graphic image that is placed on a website or can
              be added to an email. It can be added in conjunction with cookies
              and collect information regarding your interaction with the MAF
              Group website or the emails we send you. The information gathered
              helps us to enhance the effectiveness of the content and formats
              of our websites/email communications.
            </p>
          </div>

          <div className="mt-5">
            <h2 className="text-2xl font-semibold py-2 text-[#071b52] dark:text-rose-600">
              Can I Refuse to Consent to the Use of Web Beacons?
            </h2>
            <p className="text-xl font-light">
              You can configure the email reader program to avoid web beacons.
              For that, you need to disable the functionality which enables the
              loading of remote images. You can also avoid clicking on any links
              in emails you receive from MAF Group or other companies.
            </p>
          </div>

          <div className="mt-5">
            <h2 className="text-2xl font-semibold text-[#071b52] dark:text-rose-600 py-2">
              What are the Purposes of Each Type of Cookies?
            </h2>
            <p className="text-xl font-light">
              These are used to enhance your experience of using our website. It
              includes recording your consent regarding our cookie policy when
              you first enter our website. Only when you agree, the message that
              pops up will go away.
            </p>
            <ul className="text-lg font-light mt-3 flex flex-col gap-3">
              <li>Third-Party Advertising</li>
              <li>Functionality</li>
              <li>Analytical</li>
              <li>Technical</li>
              <li>Session Cookies</li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Cookies;
