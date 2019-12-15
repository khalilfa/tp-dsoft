package com.dsoft.tpdsoft.architecture;

import com.tngtech.archunit.junit.AnalyzeClasses;
import com.tngtech.archunit.junit.ArchTest;
import com.tngtech.archunit.lang.ArchRule;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RestController;

import javax.persistence.Entity;

import static com.tngtech.archunit.lang.syntax.ArchRuleDefinition.classes;

@AnalyzeClasses(packages = "src.main.java.com.dsoft.tpdsoft")
public class AnnotationTest {

    @ArchTest
    static ArchRule allModelClassesShouldHaveSpringAnnotationEntity =
            classes()
                    .that().resideInAPackage("..model..")
                    .should().beAnnotatedWith(Entity.class);

    @ArchTest
    static ArchRule allControllersClassesShoulddHaveSpringAnnotationRestController =
            classes()
                    .that().resideInAPackage("..controllers..")
                    .should().beAnnotatedWith(RestController.class);

    @ArchTest
    static ArchRule allServicesClassesShoulddHaveSpringAnnotationService =
            classes()
                    .that().resideInAPackage("..services..")
                    .should().beAnnotatedWith(Service.class);
}
