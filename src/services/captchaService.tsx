export abstract class CaptchaService {         
    public static id:string;
    public static regKey:string;

    public static reloadId(): void {
      this.id = randomString();
      this.regKey = "";
    }
    public static setRegKey(x:string): void {
        this.regKey = x;
    }
}

function randomString() { // provides a random string composed of 10 chars.
    let result = '';
    const characters = 'o3x4v8w0Op1MBGyXHnUZ9T2PzSAIF6Nqrstui7jQRmVWabcdJKLCYDEelfgh5';
    let counter = 0;
    while (counter < 10) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
        counter += 1;
    }
    return result;
}