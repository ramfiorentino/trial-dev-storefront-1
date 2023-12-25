import {NavLink} from '@remix-run/react';
import {useRootLoaderData} from '~/root';
import img1 from '../../public/custom-buttons/button-lafat1.png';
import img2 from '../../public/custom-buttons/button-lafat2.png';
import img3 from '../../public/custom-buttons/button-lafat3.png';
import img4 from '../../public/custom-buttons/button-lafat4.png';
import img5 from '../../public/custom-buttons/button-lafat5.png';
import img6 from '../../public/custom-buttons/button-lafat6.png';
import img7 from '../../public/custom-buttons/button-lafat7.png';

/**
 * @param {FooterQuery & {shop: HeaderQuery['shop']}}
 */
export function Footer({menu, shop}) {
  return (
    <footer className="footer">
      {menu && shop?.primaryDomain?.url && (
        <FooterMenu menu={menu} primaryDomainUrl={shop.primaryDomain.url} />
      )}
    </footer>
  );
}

/**
 * @param {{
 *   menu: FooterQuery['menu'];
 *   primaryDomainUrl: HeaderQuery['shop']['primaryDomain']['url'];
 * }}
 */
function FooterMenu({menu, primaryDomainUrl}) {
  const {publicStoreDomain} = useRootLoaderData();

  return (
    <>
      <h1 className="footer-title">
        LA UNICA FORMA DE AVERIGUARLO ES SENTIRLO
      </h1>
      <div className="footer-container">
        <div className="footer-column">
          <button className="custom-button fb1">
            <img src={img1} className="footer-image" />
          </button>
          <button className="custom-button fb2">
            <img src={img3} className="footer-image" />
          </button>
        </div>
        <div className="footer-column">
          <button className="custom-button fb3">
            <img src={img5} className="footer-image" />
          </button>
          <button className="custom-button fb4">
            <img src={img6} className="footer-image" />
          </button>
        </div>
        <div className="footer-column">
          <button className="custom-button fb5">
            <img src={img2} className="footer-image" />
          </button>
          <button className="custom-button fb6">
            <img src={img4} className="footer-image" />
          </button>
        </div>
      </div>
      <h2 className="footer-text">contacto: lafatbordieu@gmail.com</h2>
      {/*<nav className="footer-menu" role="navigation">
      {(menu || FALLBACK_FOOTER_MENU).items.map((item) => {
        if (!item.url) return null;
        // if the url is internal, we strip the domain
        const url =
          item.url.includes('myshopify.com') ||
          item.url.includes(publicStoreDomain) ||
          item.url.includes(primaryDomainUrl)
            ? new URL(item.url).pathname
            : item.url;
        const isExternal = !url.startsWith('/');
        return isExternal ? (
          <a href={url} key={item.id} rel="noopener noreferrer" target="_blank">
            {item.title}
          </a>
        ) : (
          <NavLink
            end
            key={item.id}
            prefetch="intent"
            to={url}
          >
            {item.title}
          </NavLink>
        );
      })}
    </nav> */}
      <h2 className="footer-text">built by Ita Fiorentino</h2>
    </>
  );
}

const FALLBACK_FOOTER_MENU = {
  id: 'gid://shopify/Menu/199655620664',
  items: [
    {
      id: 'gid://shopify/MenuItem/461633060920',
      resourceId: 'gid://shopify/ShopPolicy/23358046264',
      tags: [],
      title: 'Privacy Policy',
      type: 'SHOP_POLICY',
      url: '/policies/privacy-policy',
      items: [],
    },
    {
      id: 'gid://shopify/MenuItem/461633093688',
      resourceId: 'gid://shopify/ShopPolicy/23358013496',
      tags: [],
      title: 'Refund Policy',
      type: 'SHOP_POLICY',
      url: '/policies/refund-policy',
      items: [],
    },
    {
      id: 'gid://shopify/MenuItem/461633126456',
      resourceId: 'gid://shopify/ShopPolicy/23358111800',
      tags: [],
      title: 'Shipping Policy',
      type: 'SHOP_POLICY',
      url: '/policies/shipping-policy',
      items: [],
    },
    {
      id: 'gid://shopify/MenuItem/461633159224',
      resourceId: 'gid://shopify/ShopPolicy/23358079032',
      tags: [],
      title: 'Terms of Service',
      type: 'SHOP_POLICY',
      url: '/policies/terms-of-service',
      items: [],
    },
  ],
};

/**
 * @param {{
 *   isActive: boolean;
 *   isPending: boolean;
 * }}
 */
function activeLinkStyle({isActive, isPending}) {
  return {
    fontWeight: isActive ? 'bold' : undefined,
    color: isPending ? 'grey' : 'white',
  };
}

/** @typedef {import('storefrontapi.generated').FooterQuery} FooterQuery */
/** @typedef {import('storefrontapi.generated').HeaderQuery} HeaderQuery */
