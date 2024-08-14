import axios from "axios";
import type { AxiosInstance, AxiosResponse } from "axios";
import type { App } from "vue";

/**
 * @description service to call HTTP request via Axios
 */
class MovieApiService {
  /**
   * @description Axios instance
   */
  private static axiosInstance: AxiosInstance;

  /**
   * @description initialize vue axios
   */
  public static init(): void {
    MovieApiService.axiosInstance = axios.create({
      baseURL: "https://api.themoviedb.org/3",
    });

    // Set default headers
    MovieApiService.setHeader();
  }

  /**
   * @description set the default HTTP request headers
   */
  public static setHeader(): void {
    MovieApiService.axiosInstance.defaults.headers.common[
      "Accept"
    ] = "application/json";
    MovieApiService.axiosInstance.defaults.headers.common[
      "x-rapidapi-key"
    ] = "14d1c5e0d67ed60135f156723bfe9d79";
    MovieApiService.axiosInstance.defaults.headers.common[
      "Authorization"
    ] = "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNGQxYzVlMGQ2N2VkNjAxMzVmMTU2NzIzYmZlOWQ3OSIsIm5iZiI6MTcyMzIyMTM2Ni43MDY5MTEsInN1YiI6IjY1ZDczODE5YzhhNWFjMDE3YmUzYjU4YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._iztOSUpVfrLR0r4qnarZwv6mfWr_sLXEDYIZSQmuq4";
  }

  /**
   * @description send the GET HTTP request
   * @param resource: string
   * @param params: any
   * @returns Promise<AxiosResponse>
   */
  public static query(resource: string, params: any): Promise<AxiosResponse> {
    return MovieApiService.axiosInstance.get(resource, { params });
  }

  /**
   * @description send the GET HTTP request
   * @param resource: string
   * @param slug: string
   * @returns Promise<AxiosResponse>
   */
  public static get(
    resource: string,
    slug = "" as string
  ): Promise<AxiosResponse> {
    return MovieApiService.axiosInstance.get(`${resource}/${slug}`);
  }

  /**
   * @description set the POST HTTP request
   * @param resource: string
   * @param params: any
   * @returns Promise<AxiosResponse>
   */
  public static post(resource: string, params: any): Promise<AxiosResponse> {
    return MovieApiService.axiosInstance.post(`${resource}`, params);
  }

  /**
   * @description send the UPDATE HTTP request
   * @param resource: string
   * @param slug: string
   * @param params: any
   * @returns Promise<AxiosResponse>
   */
  public static update(
    resource: string,
    slug: string,
    params: any
  ): Promise<AxiosResponse> {
    return MovieApiService.axiosInstance.put(`${resource}/${slug}`, params);
  }

  /**
   * @description Send the PUT HTTP request
   * @param resource: string
   * @param params: any
   * @returns Promise<AxiosResponse>
   */
  public static put(resource: string, params: any): Promise<AxiosResponse> {
    return MovieApiService.axiosInstance.put(`${resource}`, params);
  }

  /**
   * @description Send the DELETE HTTP request
   * @param resource: string
   * @returns Promise<AxiosResponse>
   */
  public static delete(resource: string): Promise<AxiosResponse> {
    return MovieApiService.axiosInstance.delete(resource);
  }
}

export default MovieApiService;
