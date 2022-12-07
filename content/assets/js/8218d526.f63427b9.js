"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[4541],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},y="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),y=p(n),d=i,m=y["".concat(c,".").concat(d)]||y[d]||u[d]||a;return n?r.createElement(m,o(o({ref:t},l),{},{components:n})):r.createElement(m,o({ref:t},l))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[y]="string"==typeof e?e:i,o[1]=s;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},97351:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>y,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var r=n(87462),i=(n(67294),n(3905));const a={id:"cookbooks-encryption",title:"Pulsar Encryption",sidebar_label:"Encryption",original_id:"cookbooks-encryption"},o=void 0,s={unversionedId:"cookbooks-encryption",id:"version-2.9.x/cookbooks-encryption",title:"Pulsar Encryption",description:"Pulsar encryption allows applications to encrypt messages at the producer and decrypt at the consumer. Encryption is performed using the public/private key pair configured by the application. Encrypted messages can only be decrypted by consumers with a valid key.",source:"@site/versioned_docs/version-2.9.x/cookbooks-encryption.md",sourceDirName:".",slug:"/cookbooks-encryption",permalink:"/docs/2.9.x/cookbooks-encryption",draft:!1,editUrl:"https://github.com/apache/pulsar/edit/master/site2/docs/cookbooks-encryption.md",tags:[],version:"2.9.x",frontMatter:{id:"cookbooks-encryption",title:"Pulsar Encryption",sidebar_label:"Encryption",original_id:"cookbooks-encryption"},sidebar:"version-2.9.x/docsSidebar",previous:{title:"Message retention and expiry",permalink:"/docs/2.9.x/cookbooks-retention-expiry"},next:{title:"Message queue",permalink:"/docs/2.9.x/cookbooks-message-queue"}},c={},p=[{value:"Asymmetric and symmetric encryption",id:"asymmetric-and-symmetric-encryption",level:2},{value:"Producer",id:"producer",level:2},{value:"Consumer",id:"consumer",level:2},{value:"Here are the steps to get started:",id:"here-are-the-steps-to-get-started",level:2},{value:"Key rotation",id:"key-rotation",level:2},{value:"Enabling encryption at the producer application:",id:"enabling-encryption-at-the-producer-application",level:2},{value:"Decrypting encrypted messages at the consumer application:",id:"decrypting-encrypted-messages-at-the-consumer-application",level:2},{value:"Handling Failures:",id:"handling-failures",level:2}],l={toc:p};function y(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,r.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Pulsar encryption allows applications to encrypt messages at the producer and decrypt at the consumer. Encryption is performed using the public/private key pair configured by the application. Encrypted messages can only be decrypted by consumers with a valid key."),(0,i.kt)("h2",{id:"asymmetric-and-symmetric-encryption"},"Asymmetric and symmetric encryption"),(0,i.kt)("p",null,"Pulsar uses dynamically generated symmetric AES key to encrypt messages(data). The AES key(data key) is encrypted using application provided ECDSA/RSA key pair, as a result there is no need to share the secret with everyone."),(0,i.kt)("p",null,"Key is a public/private key pair used for encryption/decryption. The producer key is the public key, and the consumer key is the private key of the key pair."),(0,i.kt)("p",null,"The application configures the producer with the public  key. This key is used to encrypt the AES data key. The encrypted data key is sent as part of message header. Only entities with the private key(in this case the consumer) will be able to decrypt the data key which is used to decrypt the message."),(0,i.kt)("p",null,"A message can be encrypted with more than one key.  Any one of the keys used for encrypting the message is sufficient to decrypt the message"),(0,i.kt)("p",null,"Pulsar does not store the encryption key anywhere in the pulsar service. If you lose/delete the private key, your message is irretrievably lost, and is unrecoverable"),(0,i.kt)("h2",{id:"producer"},"Producer"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"alt text",src:n(26744).Z,title:"Pulsar Encryption Producer",width:"960",height:"540"})),(0,i.kt)("h2",{id:"consumer"},"Consumer"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"alt text",src:n(36869).Z,title:"Pulsar Encryption Consumer",width:"960",height:"540"})),(0,i.kt)("h2",{id:"here-are-the-steps-to-get-started"},"Here are the steps to get started:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Create your ECDSA or RSA public/private key pair.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"\nopenssl ecparam -name secp521r1 -genkey -param_enc explicit -out test_ecdsa_privkey.pem\nopenssl ec -in test_ecdsa_privkey.pem -pubout -outform pkcs8 -out test_ecdsa_pubkey.pem\n\n")),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"Add the public and private key to the key management and configure your producers to retrieve public keys and consumers clients to retrieve private keys."),(0,i.kt)("li",{parentName:"ol"},"Implement CryptoKeyReader::getPublicKey() interface from producer and CryptoKeyReader::getPrivateKey() interface from consumer, which will be invoked by Pulsar client to load the key."),(0,i.kt)("li",{parentName:"ol"},'Add encryption key to producer configuration: conf.addEncryptionKey("myapp.key")'),(0,i.kt)("li",{parentName:"ol"},"Add CryptoKeyReader implementation to producer/consumer config: conf.setCryptoKeyReader(keyReader)"),(0,i.kt)("li",{parentName:"ol"},"Sample producer application:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'\nclass RawFileKeyReader implements CryptoKeyReader {\n\n    String publicKeyFile = "";\n    String privateKeyFile = "";\n\n    RawFileKeyReader(String pubKeyFile, String privKeyFile) {\n        publicKeyFile = pubKeyFile;\n        privateKeyFile = privKeyFile;\n    }\n\n    @Override\n    public EncryptionKeyInfo getPublicKey(String keyName, Map<String, String> keyMeta) {\n        EncryptionKeyInfo keyInfo = new EncryptionKeyInfo();\n        try {\n            keyInfo.setKey(Files.readAllBytes(Paths.get(publicKeyFile)));\n        } catch (IOException e) {\n            System.out.println("ERROR: Failed to read public key from file " + publicKeyFile);\n            e.printStackTrace();\n        }\n        return keyInfo;\n    }\n\n    @Override\n    public EncryptionKeyInfo getPrivateKey(String keyName, Map<String, String> keyMeta) {\n        EncryptionKeyInfo keyInfo = new EncryptionKeyInfo();\n        try {\n            keyInfo.setKey(Files.readAllBytes(Paths.get(privateKeyFile)));\n        } catch (IOException e) {\n            System.out.println("ERROR: Failed to read private key from file " + privateKeyFile);\n            e.printStackTrace();\n        }\n        return keyInfo;\n    }\n}\nPulsarClient pulsarClient = PulsarClient.create("http://localhost:8080");\n\nProducerConfiguration prodConf = new ProducerConfiguration();\nprodConf.setCryptoKeyReader(new RawFileKeyReader("test_ecdsa_pubkey.pem", "test_ecdsa_privkey.pem"));\nprodConf.addEncryptionKey("myappkey");\n\nProducer producer = pulsarClient.createProducer("persistent://my-tenant/my-ns/my-topic", prodConf);\n\nfor (int i = 0; i < 10; i++) {\n    producer.send("my-message".getBytes());\n}\n\npulsarClient.close();\n\n')),(0,i.kt)("ol",{start:7},(0,i.kt)("li",{parentName:"ol"},"Sample Consumer Application:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'\nclass RawFileKeyReader implements CryptoKeyReader {\n\n    String publicKeyFile = "";\n    String privateKeyFile = "";\n\n    RawFileKeyReader(String pubKeyFile, String privKeyFile) {\n        publicKeyFile = pubKeyFile;\n        privateKeyFile = privKeyFile;\n    }\n\n    @Override\n    public EncryptionKeyInfo getPublicKey(String keyName, Map<String, String> keyMeta) {\n        EncryptionKeyInfo keyInfo = new EncryptionKeyInfo();\n        try {\n            keyInfo.setKey(Files.readAllBytes(Paths.get(publicKeyFile)));\n        } catch (IOException e) {\n            System.out.println("ERROR: Failed to read public key from file " + publicKeyFile);\n            e.printStackTrace();\n        }\n        return keyInfo;\n    }\n\n    @Override\n    public EncryptionKeyInfo getPrivateKey(String keyName, Map<String, String> keyMeta) {\n        EncryptionKeyInfo keyInfo = new EncryptionKeyInfo();\n        try {\n            keyInfo.setKey(Files.readAllBytes(Paths.get(privateKeyFile)));\n        } catch (IOException e) {\n            System.out.println("ERROR: Failed to read private key from file " + privateKeyFile);\n            e.printStackTrace();\n        }\n        return keyInfo;\n    }\n}\n\nConsumerConfiguration consConf = new ConsumerConfiguration();\nconsConf.setCryptoKeyReader(new RawFileKeyReader("test_ecdsa_pubkey.pem", "test_ecdsa_privkey.pem"));\nPulsarClient pulsarClient = PulsarClient.create("http://localhost:8080");\nConsumer consumer = pulsarClient.subscribe("persistent://my-tenant//my-ns/my-topic", "my-subscriber-name", consConf);\nMessage msg = null;\n\nfor (int i = 0; i < 10; i++) {\n    msg = consumer.receive();\n    // do something\n    System.out.println("Received: " + new String(msg.getData()));\n}\n\n// Acknowledge the consumption of all messages at once\nconsumer.acknowledgeCumulative(msg);\npulsarClient.close();\n\n')),(0,i.kt)("h2",{id:"key-rotation"},"Key rotation"),(0,i.kt)("p",null,"Pulsar generates new AES data key every 4 hours or after a certain number of messages are published. The asymmetric public key is automatically fetched by producer every 4 hours by calling CryptoKeyReader::getPublicKey() to retrieve the latest version."),(0,i.kt)("h2",{id:"enabling-encryption-at-the-producer-application"},"Enabling encryption at the producer application:"),(0,i.kt)("p",null,"If you produce messages that are consumed across application boundaries, you need to ensure that consumers in other applications have access to one of the private keys that can decrypt the messages.  This can be done in two ways:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"The consumer application provides you access to their public key, which you add to your producer keys"),(0,i.kt)("li",{parentName:"ol"},"You grant access to one of the private keys from the pairs used by producer ")),(0,i.kt)("p",null,"In some cases, the producer may want to encrypt the messages with multiple keys. For this, add all such keys to the config. Consumer will be able to decrypt the message, as long as it has access to at least one of the keys."),(0,i.kt)("p",null,"E.g: If messages needs to be encrypted using 2 keys myapp.messagekey1 and myapp.messagekey2,"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'\nconf.addEncryptionKey("myapp.messagekey1");\nconf.addEncryptionKey("myapp.messagekey2");\n\n')),(0,i.kt)("h2",{id:"decrypting-encrypted-messages-at-the-consumer-application"},"Decrypting encrypted messages at the consumer application:"),(0,i.kt)("p",null,"Consumers require access one of the private keys to decrypt messages produced by the producer. If you would like to receive encrypted messages, create a public/private key and give your public key to the producer application to encrypt messages using your public key."),(0,i.kt)("h2",{id:"handling-failures"},"Handling Failures:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Producer/ Consumer loses access to the key",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Producer action will fail indicating the cause of the failure. Application has the option to proceed with sending unencrypted message in such cases. Call conf.setCryptoFailureAction(ProducerCryptoFailureAction) to control the producer behavior. The default behavior is to fail the request."),(0,i.kt)("li",{parentName:"ul"},"If consumption failed due to decryption failure or missing keys in consumer, application has the option to consume the encrypted message or discard it. Call conf.setCryptoFailureAction(ConsumerCryptoFailureAction) to control the consumer behavior. The default behavior is to fail the request.\nApplication will never be able to decrypt the messages if the private key is permanently lost."))),(0,i.kt)("li",{parentName:"ul"},"Batch messaging",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"If decryption fails and the message contain batch messages, client will not be able to retrieve individual messages in the batch, hence message consumption fails even if conf.setCryptoFailureAction() is set to CONSUME."))),(0,i.kt)("li",{parentName:"ul"},"If decryption fails, the message consumption stops and application will notice backlog growth in addition to decryption failure messages in the client log. If application does not have access to the private key to decrypt the message, the only option is to skip/discard backlogged messages.")))}y.isMDXComponent=!0},36869:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/pulsar-encryption-consumer-2831a122b5b79a1619d00af823b2506c.jpg"},26744:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/pulsar-encryption-producer-1d7f4562a5c743e0442a0ec472ca8ef6.jpg"}}]);