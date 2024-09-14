import * as React from "react";
import { Link, graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import Layout from "../components/Layout";
import Heading from "../components/Heading";
import Seo from "../components/Seo";

const Home = ({ data, location }) => {
  const posts = data.allMarkdownRemark.nodes;

  return (
    <Layout>
      <div className="container">
        <div className="hero-wrapper">
          <header className="hero index">
            <h1>Hey, I'm Aaron!</h1>
            <p className="hero-description small width">
              Fancy seeing you here.{" "}
              <span role="img" aria-label="Fist emoji" className="emoji">
                👊🏻
              </span>
            </p>
            <p className="hero-description small width">
              I'm wrapping up my second full{" "}
              <a
                href="https://www.youtube.com/@aarondurant80"
                target="_blank"
                rel="noreferrer"
                className="motocross"
              >
                motocross
              </a>{" "}
              season in 16 years, optimizing my environment, returning to
              healthy habits, and starting some new things.
            </p>
          </header>
          <div>
            <StaticImage
              src="../images/Aaron-Durant-2024-motocross-jump.jpg"
              alt="Aaron Durant on his motocross race bike"
              title="Aaron Durant on his motocross race bike"
              className="image"
              placeholder="blurred"
              formats={["auto", "webp", "avif"]}
              quality={100}
            />
          </div>
        </div>
      </div>

      <div className="container">
        <section className="segment first">
          <Heading title="Latest Writing" slug="/writing" />

          <div>
            {posts.map((post) => {
              const title = post.frontmatter.title || post.fields.slug;

              return (
                <Link to={post.fields.slug} className="post">
                  <h3 key={post.fields.slug}>{title}</h3>
                  <time>{post.frontmatter.date}</time>
                </Link>
              );
            })}
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Home;

export const Head = ({ data }) => <Seo title={data.site.siteMetadata.name} />;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        name
      }
    }
    allMarkdownRemark(limit: 5, sort: { frontmatter: { date: DESC } }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM YYYY")
          title
          description
        }
      }
    }
  }
`;
