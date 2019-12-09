package com.dsoft.tpdsoft.repositories;

import com.dsoft.tpdsoft.model.Category;
import com.dsoft.tpdsoft.model.Menu;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MenuRepository extends PagingAndSortingRepository<Menu, Integer> {
    Page<Menu> findAllByCategories(Category category, Pageable pageable);
    Page<Menu> findByNameContainingOrDescriptionContaining(String name, String description, Pageable pageable);
}
