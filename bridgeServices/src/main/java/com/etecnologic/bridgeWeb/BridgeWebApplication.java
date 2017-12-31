package com.etecnologic.bridgeWeb;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

@SpringBootApplication
@ComponentScan ("com.etecnologic")
@EnableMongoRepositories(basePackages = "com.etecnologic.bridge.dao.interfaz")
@EnableAutoConfiguration
public class BridgeWebApplication {

	public static void main(String[] args) {
		SpringApplication.run(BridgeWebApplication.class, args);
	}


}
