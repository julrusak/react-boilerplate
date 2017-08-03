import * as types from './actionTypes';
import HomepageApi from '../api/HomepageApi';

export function loadHomepageSuccess(data) {
	return {type: types.LOAD_HOMEPAGE_DATA_SUCCESS, data};
}

export function loadHomepageData() {
	return function(dispatch) {
		return "";
	};
}