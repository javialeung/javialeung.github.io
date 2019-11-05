import React, { Component } from "react";
import Link from "gatsby-link";
import Helmet from "react-helmet";

import TextPostBody from './../components/textPost';

import '../templates/post-template.css';

class Template extends Component {
  render() {
    const { data } = this.props;
    const images = data.allFile;
    const post = data.markdownRemark;
    return (
      <div className="content">
        <div className="wrapper">
          <Link to={`${post.frontmatter.origin}`} className="site-nav-option">Back</Link>
          <div className="post-container">
            <Helmet title={`JAVIA LEUNG - ${post.frontmatter.title}`} />
            <div className="post">
              <h1>{post.frontmatter.title}</h1>
              <TextPostBody htmlAst={post.htmlAst} images={images} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Template;

export const pageQuery = graphql`
  query ProjectPosts($path: String!, $imageFolder: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      htmlAst
      frontmatter {
        path
        title
        origin
      }
    }
    allFile(
      sort: { fields: [name], order: ASC },
      filter: {
        extension: { regex: "/(jpg)|(png)|(tif)|(tiff)|(webp)|(jpeg)/" }
        sourceInstanceName: { eq: "images" }
        relativeDirectory: { eq: $imageFolder }
      }) {
        edges {
          node {
            name
            relativePath
          }
        }
      }
  }
`;