import React from "react"
import { Link } from "gatsby"
import { ThemeToggler } from "gatsby-plugin-dark-mode"
import { rhythm, scale } from "../utils/typography"

class Layout extends React.Component {
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

    return (
      <>
        <ThemeToggler>
          {({ theme, toggleTheme }) => (
            <div>
              <button
                className="dark-switcher"
                onClick={() =>
                  toggleTheme(theme === "light" ? "dark" : "light")
                }
              >
                {theme === "dark" ? <span>☀</span> : <span>☾</span>}
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
                <footer
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    paddingTop: "80px",
                  }}
                >
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <p>
                      <a href="https://www.linkedin.com/in/jonathan-rintala/">
                        Linkedin
                      </a>
                    </p>

                    <p style={{ paddingLeft: "10px" }}>
                      <a href="https://github.com/rintala">Github</a>
                    </p>
                    <p style={{ paddingLeft: "10px" }}>
                      <a href="https://www.jonathanrintala.se/">
                        Personal website
                      </a>
                    </p>
                  </div>
                  © {new Date().getFullYear()}
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
