import React from "react";
import Layout from "../components/Layout";

const T_C = () => {
  return (
    <Layout title={"MAF | Terms and Conditions"}>
      <div className="w-full mt-[4rem]">
        <div className="w-[90%] lg:w-[80%] m-auto flex flex-col gap-5">
          <h2 className="text-3xl font-bold text-[#071b52] dark:text-rose-600 pt-5">
            MAF Group- Privacy Policy
          </h2>
          <p className="text-xl font-light">
            This privacy policy was created to provide information on how MAF
            Group collects and processes your data whenever you use our website.
            If you have any questions regarding this privacy policy and want to
            exercise any of your legal rights, please contact us using the
            information displayed at the end of this webpage.
          </p>
          <div className="flex flex-col">
            <h2 className="text-2xl font-semibold text-[#071b52] dark:text-rose-600">
              What Data MAF Group Collects?
            </h2>
            <h4 className="text-xl font-light pt-3">
              We usually need the following information from you:
            </h4>
            <ul className="pl-6 text-lg font-light pt-2">
              <li>a. &nbsp; Name</li>
              <li>b. &nbsp; Business Name</li>
              <li>c. &nbsp; Contact Information</li>
              <li>d. &nbsp; IP Address</li>
              <li>
                e. &nbsp; Information regarding job applications for people who
                want to join us
              </li>
              <li>f. &nbsp; Information regarding your business queries</li>
            </ul>
          </div>
          <div className="flex flex-col">
            <h2 className="py-4 text-2xl font-semibold text-[#071b52] dark:text-rose-600">
              How Do We Use Your Personal Data?
            </h2>
            <p className="text-xl font-light">
              We can use the data you share to contact you for business purposes
              or review your candidature for a job.
            </p>
            <p className="py-1 text-xl font-light">
              If you sign up to be on our mailing list, we will sometimes use
              the data to send business newsletters and emailers.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <h2 className="text-2xl font-semibold text-[#071b52] dark:text-rose-600">
              How Do We Collect Your Personal Data?
            </h2>
            <p className="text-xl font-light">
              We collect data about you or from you via any of the following
              methods:
            </p>
            <div className="flex flex-col gap-3">
              <h2 className="pl-5 font-semibold text-[#071b52] dark:text-rose-600 text-xl">
                • Direct Collection
              </h2>
              <p className="text-lg font-light">
                We collect the data from you directly when you contact us by
                using the online chat tool or the contact us form.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <h2 className="pl-5 font-semibold text-[#071b52] dark:text-rose-600 text-xl">
                • Automated Collection
              </h2>
              <p className="text-lg font-light">
                When you use the MAF Group website, we collect technical data
                regarding your equipment, browsing actions, and usage patterns.
                This data is collected as a part of our cookie policy.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <h2 className="pl-5 font-semibold text-[#071b52] dark:text-rose-600 text-xl">
                • Collection via Calls
              </h2>
              <p className="text-lg font-light">
                We might also record the telephone calls you make to MAF Group
                or our employees. It is usually done for proof of information,
                advice offered to you, or even for training purposes.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <h2 className="pl-5 font-semibold text-[#071b52] dark:text-rose-600 text-xl">
                • Collection via Chats
              </h2>
              <p className="text-lg font-light">
                If you connect with MAF Group via chat, we might collect data
                like your name, telephone number, address, email ID, location
                information, website, platform navigation path, and even IP
                address. You should also know that the profile data can be
                processed to provide you with our services or support the
                services we offer. The legal basis for this can be either our
                legitimate interests or our consent. It means that we collect
                this information to ensure that we provide the best possible
                service to you when we enter into a contract with you.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-[#071b52] dark:text-rose-600">
                How Long Do We Store Your Data?
              </h2>
              <p className="text-xl font-light pt-2">
                We store your data for as long as needed until its purpose is
                fulfilled. We have specific retention periods for all the data
                we collect.
              </p>
            </div>

            <div className="mt-3">
              <h2 className="text-2xl font-semibold text-[#071b52] dark:text-rose-600">
                What are the Legal Grounds for Processing Your Data?
              </h2>
              <p className="text-xl font-light pt-2">
                We process your personal data because it is in our legitimate
                interests to fulfil enquiries that you have made on the MAF
                Group website.
              </p>
            </div>

            <div className="mt-3">
              <h2 className="text-2xl font-semibold text-[#071b52] dark:text-rose-600">
                Do We Share Your Data with Other Organizations?
              </h2>
              <p className="text-xl font-light pt-2">
                No, we do not share your personal data with other organizations.
                It is for internal purposes only.
              </p>
            </div>

            <div className="mt-3">
              <h2 className="text-2xl font-semibold text-[#071b52] dark:text-rose-600">
                Will Your Data be Transferred outside the UK or even EEA?
              </h2>
              <p className="text-xl font-light pt-2">
                No, we will never transfer your personal data outside the UK.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default T_C;
