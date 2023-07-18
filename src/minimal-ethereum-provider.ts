import { JsonRpcRequest } from 'json-rpc-engine';

/**
 * The interface for the Ethereum provider.
 *
 * This provider follows conventions that pre-date
 * [EIP-1193](https://eips.ethereum.org/EIPS/eip-1193). It is not compliant with
 * any Ethereum provider standard.
 */
export type MinimalEthereumProvider = {
  /**
   * Send a provider request asynchronously.
   *
   * @param req - The request to send.
   * @param callback - A function that is called upon the success or failure of the request.
   */
  sendAsync(
    req: JsonRpcRequest<unknown>,
    callback: (error: unknown, providerRes?: any) => void,
  ): void;

  /**
   * Send a provider request asynchronously.
   *
   * This method serves the same purpose as `sendAsync`. It only exists for
   * legacy reasons.
   *
   * @deprecated Use `sendAsync` instead.
   * @param req - The request to send.
   * @param callback - A function that is called upon the success or failure of the request.
   */
  send(
    req: JsonRpcRequest<unknown>,
    callback: (error: unknown, providerRes?: any) => void,
  ): void;
};
