import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import Layout from "../components/Layout";
import Seo from "../components/Seo";

const About = () => {
  return (
    <Layout>
      <div className="container">
        <div className="grid">
          <div className="article-content">
            <div className="hero">
              <h1>About Me</h1>
            </div>
            <section className="segment small">
              <div className="post-content">
                <p>
                  I'm a writer and motocross racer in Michigan. Currently, I'm
                  wrapping up the 2024 motocross season and seeking a new
                  writing or software development role.
                </p>

                <p>
                  Coding and motocross have been my primary focuses since 2020.
                  It all came together in the second half of 2022, beginning
                  with the start of my software development career in July. In
                  October, I lapped a motocross track for the first time since
                  2008.
                </p>

                <p>
                  Previously, I attended three dozen motorsports events across
                  North America between 2015 and 2020 with media accreditation
                  and published over 1,500 articles on a website I co-founded
                  called{" "}
                  <a
                    href="https://www.theapex.racing/author/aaron-durant/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    The Apex
                  </a>
                  . The intersection of website design and content is a central
                  interest of mine and I plan to channel it more in the future.
                </p>

                <p>
                  I also enjoy playing drums, playing golf, snowboarding, taking
                  in heavy metal concerts from the front row, and laughing with
                  my family, girlfriend, and friends.
                </p>

                <StaticImage
                  src="../images/Aaron-Durant-2024-motocross-practice.jpg"
                  alt="Aaron Durant practicing during the 2024 motocross season"
                  title="Aaron Durant practicing motocross on his 2023 Honda CRF250R"
                  className="image"
                  placeholder="blurred"
                  formats={["auto", "webp", "avif"]}
                  quality={100}
                />
              </div>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;

export const Head = () => {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          name
        }
      }
    }
  `);

  const siteName = site.siteMetadata.name;

  return <Seo title={`About • ${siteName}`} />;
};
