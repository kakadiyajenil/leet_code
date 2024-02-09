
var TimeLimitedCache = function() {
    this.cache = {}
    this.cache.count = 0
 };
 
 /** 
 * @param {number} key
 * @param {number} value
 * @param {number} duration 
 * @return {boolean}  */
 TimeLimitedCache.prototype.set = function(key, value, duration) {
    if(!this.cache.hasOwnProperty(key)){
        this.cache[key] = {
            value,
            expired: false
        }
        setTimeout(()=>{
            this.cache[key].expired = true
            this.cache.count -= 1
        }, duration)
        this.cache.count += 1
        return false
    }
    else if(this.cache.hasOwnProperty(key) && this.cache[key].expired){
        delete this.cache[key]
        this.cache.count -= 1
    }
    else if(this.cache.hasOwnProperty(key) && !this.cache[key].expired){
        this.cache[key].value = value
        this.cache[key].time = duration
        this.cache[key].expired = false
        setTimeout(()=>{
            this.cache[key].expired = true
            this.cache.count -= 1
        }, duration)
        return true
    }
 
 };
 
 /** 
 * @param {number} key
 * @return {number} 
 */
 TimeLimitedCache.prototype.get = function(key) {
    console.log(this.cache)
    if(this.cache.hasOwnProperty(key) && !this.cache[key].expired){
        return this.cache[key].value
    }
    else return -1
 };
 
 /** 
 * @return {number} 
 */
 TimeLimitedCache.prototype.count = function() {
    return this.cache.count
 };
