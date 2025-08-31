import { LinkHeader } from "./LinksHeader"

export const Header = function () {
  return (
    <header>
      <h1>Patagonia Pionera Transport</h1>
      <nav>
        <ul className="header-links">
          <LinkHeader
            url="#services"
            title="Servicios"
            icon="package_2"
          />
          <LinkHeader
            url="#features"
            title="Caracteristicas"
            icon="feature_search"
          />
          <LinkHeader
            url="#reviews"
            title="Opiniones"
            icon="share_reviews"
          />
          <LinkHeader
            url="#faqs"
            title="Faqs"
            icon="contact_support"
          />
        </ul>
      </nav>
    </header>
  )
}