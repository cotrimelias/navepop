import * as React from "react"
import { Link } from "gatsby"
import SearchIcon from "../icons/search"
import { searchButton } from "./menu-nav.module.css"

export function SearchButton({ children }) {
  return (
    <Link
      aria-label={"Botão de Pesquisa"}
      to="/search"
      className={searchButton}
    >
      <SearchIcon />
      {children}
    </Link>
  )
}
