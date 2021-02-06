import Controller from "@ember/controller";
import { action } from '@ember/object';

export default class PassingComponents extends Controller {
    cities = ['Barcelona', 'London', 'New York', 'Porto', 'Coruña', 'Kracow', 'Siena', 'Portland', 'Springfield', 'Tokio']
    destination = 'London'

    @action
    chooseDestination(city) {
        this.set('destination', city);
    }
}
