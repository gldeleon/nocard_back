import { Request, Response } from "express";
import configData from "../config/config";
import * as Soap from "soap";

export const getOrigin = async (req: Request, res: Response) => {
  /*search origin from soap*/
  let soapUrl: string = configData.TransPais.URL;

  const reqArgs = {
    args: {
      in0: "-1",
      in1: configData.TransPais.USR,
      in2: configData.TransPais.PWD,
    },
  };
  try {
    await Soap.createClient(soapUrl, function (err: any, client: any) {
      if (err) {
        console.error(err);
        res.send(err);
      } else {
        client.buscarOrigenInternet(
          reqArgs.args,
          function (err: any, response: any) {
            if (err) {
              console.error(err);
            } else {
              // res.send(response.out);
              res
                .status(200)
                .json({ success: true, data: response.out, msg: "ok" });
            }
          }
        );
      }
    });
  } catch (e) {
    res.status(500).json({
      success: false,
      data: null,
      msg: "problem to comunicate to SOAP",
    });
  }
};

export const getDestination = async (req: Request, res: Response) => {
  /*search origin from soap*/
  let soapUrl: string = configData.TransPais.URL;

  const reqArgs = {
    args: {
      in0: "-1",
      in1: req.params.idOrigin,
      in2: configData.TransPais.USR,
      in3: configData.TransPais.PWD,
    },
  };
  try {
    await Soap.createClient(soapUrl, function (err: any, client: any) {
      if (err) {
        console.error(err);
        res.send(err);
      } else {
        client.buscarDestinoInternet(
          reqArgs.args,
          function (err: any, response: any) {
            if (err) {
              console.error(err);
            } else {
              res
                .status(200)
                .json({ success: true, data: response.out, msg: "ok" });
            }
          }
        );
      }
    });
  } catch (e) {
    res.status(500).json({
      success: false,
      data: null,
      msg: "problem to comunicate to SOAP",
    });
  }
};

export const searchTravel = async (req: Request, res: Response) => {
  let soapUrl: string = configData.TransPais.URL;
  let originId = req.body.originId;
  let destinationId = req.body.destinationId;
  let scheduleDate = req.body.date;

  const reqArgs = {
    args: {
      in0: originId,
      in1: destinationId,
      in2: scheduleDate,
      in3: configData.TransPais.USR,
      in4: configData.TransPais.PWD,
    },
  };
  try {
    await Soap.createClient(soapUrl, function (err: any, client: any) {
      if (err) {
        console.error(err);
        res.send(err);
      } else {
        client.consultarCorridas(
          reqArgs.args,
          function (err: any, response: any) {
            if (err) {
              console.error(err);
            } else {
              res
                .status(200)
                .json({ success: true, data: response.out, msg: "ok" });
            }
          }
        );
      }
    });
  } catch (e) {
    res.status(500).json({
      success: false,
      data: null,
      msg: "problem to comunicate to SOAP",
    });
  }
};
