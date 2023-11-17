package com.monocept.security;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;

import com.monocept.security.filter.AuthenticationFilter;
import com.monocept.security.filter.ExceptionHandlerFilter;
import com.monocept.security.filter.JWTAuthorizationFilter;
import com.monocept.security.manager.CustomAuthenticationManager;
import com.monocept.service.IUserService;

//import lombok.AllArgsConstructor;

import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;


@Configuration
public class SecurityConfig {

	@Autowired
	CustomAuthenticationManager authenticationManager;
	

	
    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        AuthenticationFilter authenticateFilter=new AuthenticationFilter(authenticationManager);
        authenticateFilter.setFilterProcessesUrl("/login");
    	
    	http        
            .csrf().disable()
            .authorizeHttpRequests()
            .requestMatchers(HttpMethod.POST,SecurityConstants.REGISTER_USER_PATH).permitAll()
            .requestMatchers(HttpMethod.POST,"/employee/save").permitAll()
            .requestMatchers(HttpMethod.POST,"/customerapp/save").permitAll()
            .requestMatchers(HttpMethod.POST,"/customerapp/save/agent/**").permitAll()
            .requestMatchers(HttpMethod.POST,"/agentapp/save").permitAll()
            .requestMatchers(HttpMethod.GET,"/state/get-all").permitAll()
            .requestMatchers(HttpMethod.GET,"/state/getactivestates").permitAll()
            .requestMatchers(HttpMethod.GET,"/city/get-all").permitAll()
            .requestMatchers(HttpMethod.GET,"/agentapp/getusername/**").hasAnyAuthority("agent","admin","employee")
            .requestMatchers(HttpMethod.GET,"/customerapp/**").hasAnyAuthority("customer","admin","employee")
            .requestMatchers(HttpMethod.GET,"/agentapp/**").hasAnyAuthority("agent","admin","employee")
    		.requestMatchers(HttpMethod.PUT,"/agentapp/delete/**").hasAnyAuthority("agent","admin","employee")
    		.requestMatchers(HttpMethod.PUT,"/agentapp/update/username/**").hasAnyAuthority("agent","admin","employee")
            .requestMatchers(HttpMethod.GET,"/insuranceplan/get-id/**").permitAll()
            .requestMatchers(HttpMethod.POST,"/insuranceapp/save").hasAuthority("customer")
            .requestMatchers(HttpMethod.GET,"/insuranceapp/**").permitAll()
            .requestMatchers(HttpMethod.POST,"/policypayment/save").permitAll()
            .requestMatchers(HttpMethod.POST,"/email/sendmail").permitAll()
            .requestMatchers(HttpMethod.GET,"/state/getactivestates").permitAll()
            .requestMatchers(HttpMethod.PUT,"/admin/update").hasAnyAuthority("admin", "employee")
            .requestMatchers(HttpMethod.POST,"/insuranceplan/save").hasAuthority("admin")
            .requestMatchers(HttpMethod.GET,"/insuranceplan/get-all").permitAll()
            .requestMatchers(HttpMethod.DELETE,"/insuranceplan/delete/**").hasAnyAuthority("admin", "employee")
            .requestMatchers(HttpMethod.PUT,"/insuranceplan/update/**").hasAnyAuthority("admin", "employee")
            .requestMatchers(HttpMethod.GET,"/insuranceplan/get-id/**").hasAnyAuthority("admin", "employee")
            .requestMatchers(HttpMethod.POST,"/policy/save").hasAuthority("admin")
            .requestMatchers(HttpMethod.GET,"/policy/get-all").permitAll()
            .requestMatchers(HttpMethod.GET,"/policy/get-id/**").permitAll()
            .requestMatchers(HttpMethod.DELETE,"/policy/delete/**").hasAnyAuthority("admin", "employee")
            .requestMatchers(HttpMethod.POST,"/state/save").hasAuthority("admin")
            .requestMatchers(HttpMethod.POST,"/city/save").hasAuthority("admin")
            .requestMatchers(HttpMethod.PUT,"/state/update/**").hasAnyAuthority("admin", "employee")
            .requestMatchers(HttpMethod.PUT,"/city/update/**").hasAnyAuthority("admin", "employee")
            .requestMatchers(HttpMethod.GET,"/employee/get-all").hasAnyAuthority("admin", "employee")
            .requestMatchers(HttpMethod.PUT,"/employee/delete/**").hasAnyAuthority("admin", "employee")
            .requestMatchers(HttpMethod.GET,"/employee/get-id/**").hasAnyAuthority("admin", "employee")
            .requestMatchers(HttpMethod.PUT,"/employee/update").hasAnyAuthority("admin", "employee")
            .anyRequest().authenticated()
            .and()
            .addFilterBefore(new ExceptionHandlerFilter(), AuthenticationFilter.class)
            .addFilter(authenticateFilter)
            .addFilterAfter(new JWTAuthorizationFilter(), AuthenticationFilter.class)
            .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS);
    	
    	Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
    	System.out.println(authentication);
        return http.build();
    }
    
}