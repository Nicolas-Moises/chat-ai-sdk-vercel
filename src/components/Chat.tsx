'use client'

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";

import { useChat } from 'ai/react'

export function Chat() {

    const{ messages, input, handleInputChange, handleSubmit } = useChat({
        api: '/api/chat'
    })

    return (
        <Card className="w-[440px] min-h-[700px]">
            <CardHeader>
                <CardTitle>
                    Chat AI
                </CardTitle>
                <CardDescription>
                    Using Vercer SDK to create chat bot
                </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <ScrollArea className='h-[600px] w-full flex flex-col gap-4 pr-4 mb-4'>
                {messages.map(message => {
                    return (
                        <div className="flex gap-2 text-slate-600 text-sm" key={message.id}>
                            {message.role === 'user' && (
                                <Avatar>
                                    <AvatarFallback>
                                        NM
                                    </AvatarFallback>
                                    <AvatarImage src="https://github.com/Nicolas-Moises.png" />
                                </Avatar>
                            )}
                            {message.role === 'assistant' && (
                                <Avatar>
                                    <AvatarFallback>
                                        RS
                                    </AvatarFallback>
                                    <AvatarImage src="https://github.com/shadcn.png" />
                                </Avatar>
                            )}
                            <p className="leading-relaxed">
                                <span className="block font-bold text-slate-700">
                                    {message.role === 'user' ? 'Usuário' : 'Robô'}:
                                </span>
                                {message.content}
                            </p>
                        </div>
                    )
                }) }
                </ScrollArea>
            </CardContent>
            <CardFooter >
                <form onSubmit={handleSubmit} className="flex gap-2 w-full"> 
                    <Input placeholder="How can I help you?" value={input} onChange={handleInputChange} />
                    <Button type="submit">
                        Send
                    </Button>
                </form>
            </CardFooter>
        </Card>
    )
}