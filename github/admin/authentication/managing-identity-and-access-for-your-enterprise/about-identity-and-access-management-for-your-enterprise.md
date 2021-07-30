---
title: About identity and access management for your enterprise
shortTitle: About identity and access management
intro: "You can use {% ifversion ghes %}{% data variables.product.prodname_ghe_server %}'s built-in authentication, or choose between CAS, LDAP, or SAML{% else %}SAML single sign-on (SSO) and System for Cross-domain Identity Management (SCIM){% endif %} to centrally manage access {% ifversion fpt %}to organizations owned by your enterprise on {% data variables.product.prodname_dotcom_the_website %}{% endif %}{% ifversion ghes or ghae %}to {% data variables.product.product_location %}{% endif %}."
product: "{% data reusables.gated-features.saml-sso %}"
versions:
  ghae: "*"
type: overview
topics:
  - Accounts
  - Access management
  - Authentication
  - Enterprise
  - Identity
redirect_from:
  - /admin/authentication/about-identity-and-access-management-for-your-enterprise
---

## About identity and access management for your enterprise

{% ifversion ghae %}

{% data reusables.saml.ae-uses-saml-sso %} {% data reusables.saml.ae-enable-saml-sso-during-bootstrapping %}

After you configure the application for {% data variables.product.product_name %} on your IdP, you can grant access to {% data variables.product.product_location %} by assigning the application to users and groups on your IdP. For more information about SAML SSO for {% data variables.product.product_name %}, see "[Configuring SAML single sign-on for your enterprise](/admin/authentication/configuring-saml-single-sign-on-for-your-enterprise)."

{% data reusables.scim.after-you-configure-saml %} For more information, see "[Configuring user provisioning for your enterprise](/admin/authentication/configuring-user-provisioning-for-your-enterprise)."

To learn how to configure both authentication and user provisioning for {% data variables.product.product_location %} with your specific IdP, see "[Configuring authentication and provisioning with your identity provider](/admin/authentication/configuring-authentication-and-provisioning-with-your-identity-provider)."

{% endif %}

## Further reading

- [SAML Wiki](https://wiki.oasis-open.org/security) on the OASIS website
- [System for Cross-domain Identity Management: Protocol (RFC 7644)](https://tools.ietf.org/html/rfc7644) on the IETF website
- [Restricting network traffic to your enterprise](/admin/configuration/restricting-network-traffic-to-your-enterprise)
