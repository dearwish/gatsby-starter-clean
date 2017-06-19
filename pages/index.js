import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Helmet from "react-helmet"
import { config } from 'config'

export default class Index extends React.Component {
  render () {
    return (
      <div>
        <Helmet
          title={config.siteTitle}
          meta={[
            {"name": "description", "content": "Dearwish blog"},
            {"name": "keywords", "content": "dearwish, blog, development, react, redux, architecture"},
          ]}
        />
        <h1>
          Hi there! This is my test blog
        </h1>
        <p>Let's get started</p>
      </div>
    )
  }
}
