import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { allFiltersSelectedPlaceholder, allFiltersSelectedPlaceholderFilter } from "../../../dicts/all-filters-selected-placeholder";
import { amenitiesQuantity } from "../../../dicts/amenities-quantity";
import { city } from "../../../dicts/cities";
import { contractType } from "../../../dicts/contract-type";
import { filterSearchParams } from "../../../dicts/filter-search-params";
import { propertyType } from "../../../dicts/property-type";

const filterToObjectMapping = {
    [filterSearchParams.contractType]: contractType,
    [filterSearchParams.city]: city,
    [filterSearchParams.propertyType]: propertyType,
    [filterSearchParams.parking]: {
        ...amenitiesQuantity,
        [allFiltersSelectedPlaceholderFilter]: allFiltersSelectedPlaceholder
    },
    [filterSearchParams.rooms]: {
        ...amenitiesQuantity,
        [allFiltersSelectedPlaceholderFilter]: allFiltersSelectedPlaceholder
    },
    [filterSearchParams.bathroom]: {
        ...amenitiesQuantity,
        [allFiltersSelectedPlaceholderFilter]: allFiltersSelectedPlaceholder
    }
}

export function useInitialFilters() {
    let [searchParams, setSearchParams] = useSearchParams();

    const initialFilters = useMemo(() => {
      const filters = Object.values(filterSearchParams)

      const iFilters = filters.reduce((acc, current) => {
        const param = searchParams.get(current)

        if(param) {
            const filterOptions = filterToObjectMapping[current]
            
            if (filterOptions) {
                if (Object.keys(filterOptions).includes(param)) {
                    return {
                        ...acc,
                        [current]: filterOptions[param]
                    }
                }
            } else {
                return acc
            }
        } else {
            return acc
        }
      }, {})

  
      return iFilters
    }, [searchParams])

    return initialFilters
}