package com.dsoft.tpdsoft.security;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.oauth2.core.DelegatingOAuth2TokenValidator;
import org.springframework.security.oauth2.core.OAuth2TokenValidator;
import org.springframework.security.oauth2.jwt.*;

@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    @Override
    public void configure(HttpSecurity http) throws Exception {
        http.authorizeRequests()
                .mvcMatchers("/menus").authenticated()
                .mvcMatchers("/menus/filter/category").authenticated()
                .mvcMatchers("/menus/filter").authenticated()
                .mvcMatchers("/client/").authenticated()
                .mvcMatchers("/client/{id}").authenticated()
                .mvcMatchers("/client/{id}/cart").authenticated()
                .mvcMatchers("/client/{clientId}/cart").authenticated()
                .mvcMatchers("/client/{id}/credit/{credit}").authenticated()
                .mvcMatchers("/client/{id}/buy").authenticated()
                .mvcMatchers("/client/{id}/summaries").authenticated()
                .mvcMatchers("/provider/{id}/logo").authenticated()
                .mvcMatchers("/provider/{id}").authenticated()
                .mvcMatchers("/provider/{id}/menu").authenticated()
                .mvcMatchers("/provider/{idProvider}/menu/{idMenu}").authenticated()
                .mvcMatchers("/provider/{id}/schedule").authenticated()
                .mvcMatchers("/provider/{id}/credit/{credit}").authenticated()
                .mvcMatchers("/provider/{id}/summaries").authenticated()
                .and()
                .oauth2ResourceServer().jwt();
    }

    @Value("${auth0.audience}")
    private String audience;

    @Value("${spring.security.oauth2.resourceserver.jwt.issuer-uri}")
    private String issuer;

    @Bean
    JwtDecoder jwtDecoder() {
        NimbusJwtDecoder jwtDecoder = (NimbusJwtDecoder)
                JwtDecoders.fromOidcIssuerLocation(issuer);

        OAuth2TokenValidator<Jwt> audienceValidator = new AudienceValidator(audience);
        OAuth2TokenValidator<Jwt> withIssuer = JwtValidators.createDefaultWithIssuer(issuer);
        OAuth2TokenValidator<Jwt> withAudience = new DelegatingOAuth2TokenValidator<Jwt>(withIssuer, audienceValidator);

        jwtDecoder.setJwtValidator(withAudience);

        return jwtDecoder;
    }
}
