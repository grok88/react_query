import {useQuery} from "react-query";
import {countryService} from "../app/services/country_service";

export const useCountries = () => {
    const {data: countries, isLoading, refetch} = useQuery('Country list', () => countryService.getAll(), {
        onSuccess: (data) => {
            // setCountries(data);
        },
        onError: (error) => {
            alert(error);
        },
        select: (data) => {
            return data.map(country => ({...country, title: country.title + ' !'}))
        },
        // enabled:false
    });
    return {
        countries,
        isLoading,
        refetch
    }
}