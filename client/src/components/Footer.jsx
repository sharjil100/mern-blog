import { Footer } from "flowbite-react";
import { Link } from "react-router-dom";
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsLinkedin, BsTwitter } from 'react-icons/bs';

export default function FooterCom() {
  return (
    <Footer container className="border-t-8 border-l border-r border-b border-teal-500 mt-auto py-4 px-4">
      <div className="w-full max-w-7xl mx-auto">
        <div className="flex flex-wrap justify-between">
          <div className="mt-5">
            <Link
              to="/"
              className="self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white"
            >
              <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
                Sharjil's
              </span>
              Blog
            </Link>
          </div>

          {/* Footer Links Sections */}
          <div className="flex flex-wrap gap-8 mt-4 w-full pb-8">
            <div className="flex-1 min-w-[150px]">
              <Footer.Title title="About" />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="https://www.100jsprojects.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mb-2"
                >
                  100 JS Projects
                </Footer.Link>
                <Footer.Link
                  href="/About"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mb-2"
                >
                  Sharjil's Blog
                </Footer.Link>
              </Footer.LinkGroup>
            </div>

            <div className="flex-1 min-w-[150px]">
              <Footer.Title title="Follow us" />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="https://github.com/sharjil100/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mb-2"
                >
                  Github
                </Footer.Link>
                <Footer.Link
                  href="https://linkedin.com/sharjil-khan-7b53652b4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mb-2"
                >
                  Linkedin
                </Footer.Link>
              </Footer.LinkGroup>
            </div>

            <div className="flex-1 min-w-[150px]">
              <Footer.Title title="Legal" />
              <Footer.LinkGroup col>
                <Footer.Link href="#" className="mb-2">Privacy Policy</Footer.Link>
                <Footer.Link href="#" className="mb-2">Terms & Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider className="my-4" />
        <div className="w-full flex flex-col sm:flex-row sm:items-center sm:justify-between px-4 py-2">
          <Footer.Copyright
            href="#"
            by=" Sharjil's Blog"
            year={new Date().getFullYear()}
            className="text-gray-600"
          />
          <div className="flex gap-6 mt-4 sm:mt-0 sm:justify-center">
            <Footer.Icon href="#" icon={BsFacebook} />
            <Footer.Icon href="#" icon={BsTwitter} />
            <Footer.Icon href="#" icon={BsInstagram} />
            <Footer.Icon href="https://github.com/sharjil100/" icon={BsGithub} />
            <Footer.Icon href="https://linkedin.com/sharjil-khan-7b53652b4" icon={BsLinkedin} />
          </div>
        </div>
      </div>
    </Footer>
  );
}
