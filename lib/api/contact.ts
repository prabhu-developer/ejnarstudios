export interface ContactPayload {
  name: string;
  email: string;
  mobile: string;
  message: string;
}

export interface ContactApiResponse {
  success: boolean;
  message: string;
  data?: unknown;
}

const API_ENDPOINT = 'https://ejnarstudios.com/ej-mailer/api/send-mail';

/**
 * Sends a contact / inquiry message payload to the ejnarstudios mailer endpoint.
 */
export async function sendContactMessage(payload: ContactPayload): Promise<ContactApiResponse> {
  try {
    const response = await fetch(API_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        name: payload.name.trim(),
        email: payload.email.trim(),
        mobile: payload.mobile.trim(),
        message: payload.message.trim(),
      }),
    });

    const data = await response.json().catch(() => null);

    if (!response.ok) {
      const errorText =
        (data && typeof data.message === 'string' && data.message) ||
        (data && typeof data.error === 'string' && data.error) ||
        `Server responded with status ${response.status}. Please try again.`;
      return {
        success: false,
        message: errorText,
      };
    }

    return {
      success: true,
      message:
        (data && typeof data.message === 'string' && data.message) ||
        'Your inquiry has been sent successfully! Our team will get in touch shortly.',
      data,
    };
  } catch (err: unknown) {
    const errorMessage =
      err instanceof Error
        ? err.message
        : 'Network connection error. Please check your internet connection and try again.';
    return {
      success: false,
      message: errorMessage,
    };
  }
}
