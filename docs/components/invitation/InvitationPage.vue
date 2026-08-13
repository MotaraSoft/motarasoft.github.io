<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { buildMotaraUri, parseInvitationQuery, type InvitationKind } from './invitation'

const props = defineProps<{
  kind: InvitationKind
  locale: 'en' | 'zh'
}>()

const invitation = ref<ReturnType<typeof parseInvitationQuery>>(null)
const appUri = ref('')
const opened = ref(false)

const copy = props.locale === 'zh'
  ? {
      title: props.kind === 'friend' ? 'Motara 好友邀请' : 'Motara 协作会话邀请',
      valid: '请在 Motara 中查看邀请详情。',
      invalid: '当前地址不是有效的 Motara 邀请链接。',
      open: '打开 Motara',
      manual: '无法打开应用时，可将本网页链接直接粘贴于 Motara 的接受邀请窗口使用。',
      privacy: '此页面仅在浏览器中生成 motara:// 链接，不会将令牌发送到服务器。',
    }
  : {
      title: props.kind === 'friend' ? 'Motara friend invitation' : 'Motara collaboration invitation',
      valid: 'Open the invitation in Motara to view its details.',
      invalid: 'This address is not a valid Motara invitation link.',
      open: 'Open Motara',
      manual: 'If the app does not open, paste this web page link into Motara\'s invitation acceptance window.',
      privacy: 'This page creates a motara:// link in the browser and does not send the token to a server.',
    }

onMounted(() => {
  const parsed = parseInvitationQuery(window.location.search, props.kind)
  invitation.value = parsed
  if (parsed) appUri.value = buildMotaraUri(parsed)
})

function openMotara() {
  if (!appUri.value) return
  opened.value = true
  window.location.assign(appUri.value)
}

</script>

<template>
  <section class="invite-panel" aria-live="polite">
    <h1>{{ copy.title }}</h1>
    <p class="invite-status">{{ invitation ? copy.valid : copy.invalid }}</p>
    <button v-if="invitation" type="button" :disabled="opened" @click="openMotara">{{ copy.open }}</button>
    <p v-if="invitation">{{ copy.manual }}</p>
    <p>{{ copy.privacy }}</p>
    <noscript>{{ props.locale === 'zh' ? '浏览器已禁用 JavaScript，请在 Motara 中直接使用邀请链接。' : 'JavaScript is disabled. Open the invitation link directly in Motara.' }}</noscript>
  </section>
</template>
