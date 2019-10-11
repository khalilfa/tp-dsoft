package com.dsoft.tpdsoft;

import com.dsoft.tpdsoft.model.StorageProperties;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;

@SpringBootApplication
@EnableConfigurationProperties(StorageProperties.class)
public class TpDsoftApplication {

    public static void main(String[] args) {
        SpringApplication.run(TpDsoftApplication.class, args);
    }

}
