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

          <div>
            <div className="mt-3">
              <h2 className="text-2xl font-semibold text-[#071b52] dark:text-rose-600">
                Will Your Data be Transferred outside the UK or even EEA?
              </h2>
              <p className="text-xl font-light pt-2">
                No, we will never transfer your personal data outside the UK.
              </p>
            </div>
            <div className="mt-3">
              <h2 className="text-2xl font-semibold text-[#071b52]">
                Contact Us
              </h2>
              <p className="text-xl font-light pt-2">
                To know more about our cookie policy or to discuss any concerns,
                please feel free to contact us. This is meant to remind the
                users who visited the MAF Group website before, these cookies
                allow us to provide you with the same experience as we did when
                you visited our website before. These cookies are also known as
                performance cookies and can be used by either the MAF Group
                website or the third-party service providers to analyze how the
                websites are used and how they perform. For instance, these
                analytical cookies will track where our visitors are coming
                from, and which pages are visited more frequently than others.
                An example of these cookies is Google Analytics cookies.
              </p>
            </div>
            <h2 className="text-2xl font-semibold text-[#071b52] mt-5">
              Analytics Cookies{" "}
            </h2>
            <p className="text-xl mt-1">
              Also known as strictly necessary cookies, these allow the MAF
              Group website to operate smoothly and give you access to the
              sections you need to visit. For example, they can help the MAF
              Group website know your previous actions within the same browsing
              sessions and secure the MAF Group website. These cookies are
              temporary and will be deleted from your device when the web
              browser is closed. The purpose of these cookies is to track
              internet usage. <br />
              You have the right to refuse the acceptance of browser cookies.
              For that, you can activate the appropriate setting on the browser.
              Remember that if you change this setting, you might not see some
              parts of the MAF Group website. If you adjust the browser setting
              to refuse cookies, the cookies will be automatically issued by our
              system when you visit our website through that browser. The data
              that is collected by the MAF Group website via cookies will be
              kept on your device only until its purpose is met. The maximum
              period for which these cookies can be kept on your device is one
              year.
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
