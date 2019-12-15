package com.dsoft.tpdsoft.architecture;

import com.tngtech.archunit.junit.AnalyzeClasses;
import com.tngtech.archunit.junit.ArchTest;
import com.tngtech.archunit.lang.ArchRule;
import static com.tngtech.archunit.lang.syntax.ArchRuleDefinition.classes;


@AnalyzeClasses(packages = "src.main.java.com.dsoft.tpdsoft")
public class NamingConventionTest {

    @ArchTest
    static ArchRule controllersMustBePrefixed =
            classes()
                    .that().resideInAnyPackage("..controllers..")
                    .should().haveSimpleNameEndingWith("Controller");


    @ArchTest
    static ArchRule servicesMustBePrefixed =
            classes()
                    .that().resideInAnyPackage("..services..")
                    .should().haveSimpleNameEndingWith("Service");

    @ArchTest
    static ArchRule exceptionsMustBePrefixed =
            classes()
                    .that().resideInAnyPackage("..exceptions..")
                    .should().haveSimpleNameEndingWith("Exception");

    @ArchTest
    static ArchRule repositoriesMustBePrefixed =
            classes()
                    .that().resideInAnyPackage("..repositories..")
                    .should().haveSimpleNameEndingWith("Repository");



}
