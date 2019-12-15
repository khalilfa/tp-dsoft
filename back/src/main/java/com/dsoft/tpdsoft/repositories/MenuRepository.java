package com.dsoft.tpdsoft.repositories;

import com.dsoft.tpdsoft.model.Category;
import com.dsoft.tpdsoft.model.Menu;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MenuRepository extends PagingAndSortingRepository<Menu, Integer> {
    Page<Menu> findAllByOrderByNameAsc(Pageable pageable);
    Page<Menu> findAllByCategoriesOrderByNameAsc(Category category, Pageable pageable);
    Page<Menu> findAllByOrderByPriceAsc(Pageable pageable);
    Page<Menu> findAllByOrderByPriceDesc(Pageable pageable);
    Page<Menu> findAllByCategoriesOrderByPriceAsc(Category category, Pageable pageable);
    Page<Menu> findAllByCategoriesOrderByPriceDesc(Category category, Pageable pageable);
    Page<Menu> findAllByNameContainingOrDescriptionContaining(String name, String description, Pageable pageable);
}
