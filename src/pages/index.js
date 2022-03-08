import Head from "next/head";
import styles from "../styles/Home.module.scss";
import Image from "next/image";

// Components
import Layout from "../components/layout";
import SearchBox from "../components/ui/searchbox";
import ChatCard from "../components/ui/chatCard";
import Button from "../components/ui/Button";
import MessageGroup from "../components/ui/MessageGroup";
import Avatar from "../components/ui/Avatar";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Superhero Chat</title>
        <meta
          name="description"
          content="Chat with your favourite superheroes with the help of GPT-3"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <main className={styles.main}>
          {/* Left Side */}
          <div className={styles.left}>
            <SearchBox />

            {/* Chat Members */}
            <div className={styles.sidebar}>
              <ChatCard
                accentText={"09:00"}
                title={"Tony Stark"}
                subtext={"How you doing honey?"}
                key={"klajds"}
                imageURI={"/assets/images/man.jpeg"}
              />
              <ChatCard
                accentText={"09:00"}
                title={"Tony Stark"}
                subtext={"How you doing honey?"}
                key={"klajds"}
                imageURI={"/assets/images/man.jpeg"}
              />
            </div>
          </div>

          {/* Content Window */}
          <div className={styles.contentWrapper}>
            {/* Status Bar */}
            <div className={styles.statusBar}>
              {/* User Tag */}
              <div className={styles.userTag}>
                <ChatCard
                  title={"Tony Stark"}
                  imageURI="/assets/images/man.jpeg"
                  subtext="Genius, Billionaire, Playboy, Philanthropist"
                  isVerified={true}
                />
              </div>

              {/* Action Buttons */}
              <div className={styles.actionButtons}>
                <Button href="/">Clear Chat</Button>
                <Button href="/">Clear Chat</Button>
              </div>
            </div>

            {/* Chat Window */}
            <div className={styles.chatPanel}>
              {/* Messages Panel */}
              <div className={styles.messagesPanelWrapper}>
                <div className={styles.messagesPanel}>
                  {/* TODO: Create For Loop */}
                  {/* All messages */}
                  <MessageGroup
                    side="left"
                    messages={messagesData}
                    time="19:01"
                    avatarElement={
                      <Avatar
                        imageURI={"/assets/images/man.jpeg"}
                        status="online"
                        title={"man"}
                      />
                    }
                  />
                  <MessageGroup
                    side="right"
                    messages={messagesData}
                    time="19:02"
                  />
                </div>
              </div>
              {/* Bottom Bar */}
              <div className={styles.bottomBar}>
                <div className={styles.inputWrapper}>
                  {/* Emoji Picker */}
                  <div className={styles.emojiPicker}>
                    <button>
                      <Image
                        height={26}
                        width={28}
                        alt="send"
                        src="/assets/icons/smile.svg"
                      />
                    </button>
                  </div>
                  {/* Textbox */}
                  <input
                    className={styles.input}
                    placeholder="Type a message..."
                    type="text"
                  />
                </div>
                <button href="/" className={styles.primaryButton}>
                  <Image
                    height={26}
                    width={28}
                    alt="send"
                    src="/assets/icons/plane.svg"
                  />
                </button>
              </div>
            </div>
          </div>
        </main>
      </Layout>
    </div>
  );
}

const messagesData = [
  { time: "19:05", text: "Hi there! How are you?" },
  { time: "19:05", text: "Hi there! How are you?" },
  { time: "19:05", text: "Hi there! How are you?" },
  { time: "19:05", text: "Hi there! How are you?" },
  { time: "19:05", text: "Hi there! How are you?" },
];
