"use strict";
import {UseCase, DispatchedPayload} from "almin";
export class FilterTodoListFactory {
    static create() {
        return new FilterTodoListUseCase();
    }
}

export class FilterTodoListUseCase extends UseCase {
    execute(filterType) {
        this.dispatch(<DispatchedPayload>{
            type: FilterTodoListUseCase.name,
            filterType
        });
    }
}