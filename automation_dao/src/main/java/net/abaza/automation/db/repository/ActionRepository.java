package net.abaza.automation.db.repository;

import net.abaza.automation.db.model.Action;

import org.springframework.data.jpa.repository.JpaRepository;

public interface ActionRepository extends JpaRepository<Action, Long> {

}
