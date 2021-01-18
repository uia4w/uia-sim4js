/**
 * @module Interruption
 *
 * @author Kyle K. Lin 
 */

 import Event from "./event"

/**
 * An interruption event which is scheduled immediately with a cause.
 * 
 * This event is automatically triggered when it is created.
 * 
 * @constructor
 * @class
 * @extends Event
 * 
 * @param {Process} process A process this event interrupts.
 * @param {Error} cause The cause.
 */
function Interruption(process, cause) {
    Event.apply(this, [ process.env(), "Interruption" ]);
    let _process = process;

    this._value = cause;
    this.ng();
    this.defused();
    this.addCallback(function() {
        _process.unbind(_process._target);
        _process.resume(this);
    });
    process.env().schedule(this);
}

Interruption.prototype = new Event();

export default Interruption;
