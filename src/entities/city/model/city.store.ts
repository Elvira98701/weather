import { action, makeAutoObservable, observable } from "mobx";

import { storage } from "@/shared/constants";

import type { City } from "./city.types";

class CityStore {
  @observable cities: City[] = [];
  @observable currentCity: City | null = null;

  constructor() {
    makeAutoObservable(this);
    this.loadCities();
  }

  @action addCity(city: City) {
    this.cities.push(city);
    this.saveCities();
  }

  @action removeCity(cityId: string) {
    this.cities = this.cities.filter((city) => city.id !== cityId);
    this.saveCities();
  }

  @action setCurrentCity(city: City) {
    this.currentCity = city;
  }

  private saveCities() {
    localStorage.setItem(storage.CITIES_KEY, JSON.stringify(this.cities));
  }

  private loadCities() {
    const citiesFromStorage = localStorage.getItem(storage.CITIES_KEY);
    const savedCities = citiesFromStorage ? JSON.parse(citiesFromStorage) : [];

    if (savedCities) {
      this.cities = savedCities;
    }
  }
}

export const cityStore = new CityStore();
