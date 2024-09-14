import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";

import Layout from "../components/Layout";
import Seo from "../components/Seo";

const Projects = () => {
  return (
    <Layout>
      <div className="container">
        <div className="grid">
          <div className="article-content">
            <div className="hero">
              <h1>Projects</h1>
            </div>
            <section className="segment small">
              <div className="post-content">
                <p>
                  <a
                    href="https://www.youtube.com/@aarondurant80"
                    target="_blank"
                    rel="noreferrer"
                    className="motocross"
                  >
                    80HD
                  </a>{" "}
                  is my thus-far inconsistent motocross vlog aimed at capturing
                  and tracking the progress of my primary endeavor outside my
                  day job: racing my dirt bike.
                </p>

                <p>
                  I recently set up a Substack called{" "}
                  <a
                    href="https://www.tableovertwo.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Table Over Two
                  </a>
                  , where I intend to write weekly about media, mindset, and
                  more in motocross.
                </p>

                <p>
                  I have an app idea I'm very slowly beginning to tinker with,
                  but I'm primarily focused on setting up my townhome,
                  furthering my career, and improving my fitness and skill to
                  reach my motocross potential.
                </p>

                <p>
                  It's all a work in progress. I intend to{" "}
                  <Link to="/writing">write</Link> on this website roughly once
                  a month as it unfolds.
                </p>

                <h2 className="alternate-h2">Past Projects</h2>
                <p>
                  I created a publication about motorsports called{" "}
                  <a
                    href="https://www.theapex.racing/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    The Apex
                  </a>{" "}
                  with my friend Ben Hinc in 2015 but stepped away to focus on
                  web development in 2020. An{" "}
                  <a
                    href="https://www.theapex.racing/2023/04/the-apex-back-refined-approach/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    attempted return in 2023 was exciting
                  </a>
                  , but I quickly faced the difficult truth that my hands were
                  full with coding and motocross.
                </p>
                <p>
                  I made a sports dictionary in second grade, an animal magazine
                  in third grade, a newspaper in fifth grade, and a Twitter
                  account and blog about IndyCar in eighth grade. I also started
                  a band with my brother at some point. (Not to mention the
                  Nitro Circus-esque front-yard action sports video series my
                  brothers and I started; it never quite took off.)
                </p>

                <p>Does any of that count?</p>

                <p>
                  Perhaps not, but I'll admit I was one of <i>those</i> kids who
                  did lots of extracurricular stuff growing up. I'd bet on young
                  people like that 10 times out of 10; I would be very different
                  now if I weren't so curious as a kid.
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Projects;

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

  return (
    <Seo
      title={`Projects • ${siteName}`}
      description="Some details about what I'm focused on."
    />
  );
};
