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
              I'm working as a{" "}
              <a
                href="https://github.com/AaronRDurant"
                target="_blank"
                rel="noreferrer"
                className="developer"
              >
                software developer
              </a>
              , making fast progress during my second full{" "}
              <a
                href="https://www.youtube.com/channel/UCD89j1lEDHzDZFXrOrrXhJw"
                target="_blank"
                rel="noreferrer"
                className="motocross"
              >
                motocross
              </a>{" "}
              season in 16 years, and prioritizing reading more books.{" "}
              <span role="img" aria-label="Books emoji" className="emoji">
                📚
              </span>
            </p>
          </header>
          <div>
            <StaticImage
              src="../images/Aaron-Durant-March-2024-Baja-Acres-motocross.jpg"
              alt="Aaron Durant racing motocross in FTA gear at Baja Acres"
              title="Aaron Durant racing motocross"
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
