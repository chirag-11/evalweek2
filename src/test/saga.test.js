import * as saga from "../saga/saga.js";
import * as actionTypes from "../constants/actionTypes";
import {
    call,
    put,
    all
} from "redux-saga/effects";
import {
    getData,
    postData
} from "../api/api.js";
import React from "react";

describe("Saga testing data ", () => {
    const country = [{
            "id": "1",
            "name": "Bangladesh",
            "capital": "Dhaka",
            "imageUrl": "http://localhost:3000/bangladesh.jpg"
        },
        {
            "id": "2",
            "name": "Brazil",
            "capital": "Brasília",
            "imageUrl": "http://localhost:3000/brazil.jpg"
        },
        {
            "id": "3",
            "name": "China",
            "capital": "Beijing",
            "imageUrl": "http://localhost:3000/china.jpg"
        },
        {
            "id": "4",
            "name": "England",
            "capital": "London",
            "imageUrl": "http://localhost:3000/england.jpg"
        },
    ];

    describe("get data", () => {
        let fn = saga.getsaga();
        it("get data api call", () => {
            expect(fn.next().value).toEqual(call(getData));
        });

    });

    describe("save data", () => {
        let action = {
            current: {
                "id": "1",
                "name": "Bangladesh",
                "capital": "Dhaka",
                "imageUrl": "http://localhost:3000/bangladesh.jpg"
            }
        };
        let fn = saga.saveSaga(action);
        it("making the post call", () => {
            expect(fn.next().value).toEqual(call(postData, action.current));
        });
    });

});