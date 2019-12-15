package com.dsoft.tpdsoft.architecture;

import com.tngtech.archunit.junit.AnalyzeClasses;
import com.tngtech.archunit.junit.ArchTest;
import com.tngtech.archunit.lang.ArchRule;
import org.springframework.data.jpa.repository.JpaRepository;

import static com.tngtech.archunit.lang.syntax.ArchRuleDefinition.classes;

@AnalyzeClasses(packages = "src.main.java.com.dsoft.tpdsoft")
public class Inheritance {

    @ArchTest
    static ArchRule allRepositoriesShouldExtendJpaRepository =
            classes()
                    .that().resideInAnyPackage("..repositories..")
                    .should()
                    .beAssignableTo(JpaRepository.class);

    static ArchRule allExceptionsShouldExtendRunTimeException =
            classes()
                    .that().resideInAnyPackage("..exceptions..")
                    .should()
                    .beAssignableTo(RuntimeException.class);
}
