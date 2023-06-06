import Tts from 'react-native-tts';
Tts.addEventListener('tts-start', (event) => console.log("start", event));
Tts.addEventListener('tts-progress', (event) => console.log("progress", event));
Tts.addEventListener('tts-cancel', (event) => console.log("cancel", event));
Tts.addEventListener('tts-finish', (event) => console.log("finish", event));

const speak = async (text, deleteRichTextLabel = false) => {
    if (!text) return
    if (deleteRichTextLabel) text = text.replace(/<[^>]+>/g, "");
    try {
        await Tts.getInitStatus()
        // IOS可使用的语音包
        let voices = await Tts.voices();
        voices = voices.filter(i => i.language === 'zh-CN')
        Tts.speak(text, {
            iosVoiceId: voices?.[0]?.id,
            rate: 0.5,
            androidParams: {
                KEY_PARAM_PAN: -1,
                KEY_PARAM_VOLUME: 0.5,
                KEY_PARAM_STREAM: 'STREAM_MUSIC',
            }
        })
    } catch (error) {
        if (error?.code === 'no_engine') {
            Tts.requestInstallEngine();
        }
        console.log(error, '<<<TTS Error')
    }
}

export default { speak }