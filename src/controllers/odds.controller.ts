import { NextFunction, Request, Response } from "express";
import ds from "../helpers/deepstream.helper";

class OddsController {
    public async getEventTypes(req: Request, res: Response, next: NextFunction) {
        ds.rpc.make("DIAMOND_EVENT_TYPES", {}, (err, data) => {
            console.log("data: ", data);
            res.json(data);
        })
    }
    public async getEvents(req: Request, res: Response, next: NextFunction) {
        const { eventTypeId } = req.query;
        ds.rpc.make("DIAMOND_EVENTS", { eventTypeId }, (err, data) => {
            res.json(data);
        })
    }
    public async getMarkets(req: Request, res: Response, next: NextFunction) {
        const { eventId } = req.query;
        ds.rpc.make("DIAMOND_MARKETS", { eventId }, (err, data) => {
            res.json(data);
        })
    }
}

export const oddsController = new OddsController();
