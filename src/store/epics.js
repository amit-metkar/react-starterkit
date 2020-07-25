import { combineEpics } from "redux-observable";
import { epics as app } from "../state/app";
import values from 'lodash/fp/values'

export default combineEpics(
    ...values(app)
)