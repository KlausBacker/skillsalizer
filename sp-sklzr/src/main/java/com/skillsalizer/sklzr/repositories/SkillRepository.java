package com.skillsalizer.sklzr.repositories;

import com.skillsalizer.sklzr.entities.Skill;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SkillRepository extends CrudRepository<Skill, Long> {
}
