package net.abaza.automation.db.repository;

import net.abaza.automation.db.model.TestCase;

import org.springframework.data.jpa.repository.JpaRepository;

public interface TestCaseRepository extends JpaRepository<TestCase, Long> {

}
