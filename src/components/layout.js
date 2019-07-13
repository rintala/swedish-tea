import React from "react"
import { Link } from "gatsby"
import { ThemeToggler } from "gatsby-plugin-dark-mode"
import { rhythm, scale } from "../utils/typography"

class Layout extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isDark: true,
    }
  }

  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
        <div id="mainTitle">
          <h1
            style={{
              ...scale(1.5),
              marginBottom: rhythm(1.5),
              marginTop: 0,
            }}
          >
            <Link
              style={{
                boxShadow: `none`,
                textDecoration: `none`,
                color: `inherit`,
              }}
              to={`/`}
            >
              {title}
            </Link>
          </h1>
        </div>
      )
    } else {
      header = (
        <h3
          style={{
            fontFamily: `Montserrat, sans-serif`,
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h3>
      )
    }

    {
      /* <label>
              <input
                type="checkbox"
                onChange={e => toggleTheme(e.target.checked ? "dark" : "light")}
                checked={theme === "dark"}
              />{" "}
              Dark mode
            </label> */
    }
    return (
      <>
        <ThemeToggler>
          {({ theme, toggleTheme }) => (
            <div>
              <button
                className="dark-switcher"
                onClick={() => (
                  toggleTheme(this.state.isDark ? "dark" : "light"),
                  this.setState({ isDark: !this.state.isDark })
                )}
              >
                {!this.state.isDark ? (
                  <span>Light mode ☀</span>
                ) : (
                  <span>Dark mode ☾</span>
                )}
              </button>

              <div
                style={{
                  marginLeft: `auto`,
                  marginRight: `auto`,
                  maxWidth: rhythm(24),
                  padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
                }}
              >
                <header>{header}</header>
                <main>{children}</main>
                <footer>
                  © {new Date().getFullYear()}, Built with
                  {` `}
                  <a href="https://www.gatsbyjs.org">Gatsby</a>
                </footer>
              </div>
            </div>
          )}
        </ThemeToggler>
      </>
    )
  }
}

export default Layout
