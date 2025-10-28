"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Image from "next/image";
import { Loader2, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { getNutritionAdvice } from "@/app/actions";
import { useToast } from "@/hooks/use-toast";
import { getImage } from "@/lib/images";

const formSchema = z.object({
  dietaryNeeds: z.string().min(10, { message: "Descreva suas necessidades com pelo menos 10 caracteres." }),
  preferences: z.string().min(10, { message: "Descreva suas preferências com pelo menos 10 caracteres." }),
});

export default function NutritionAssistant() {
  const [recommendation, setRecommendation] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const assistantImage = getImage('assistant-image');

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      dietaryNeeds: "",
      preferences: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setRecommendation(null);
    const result = await getNutritionAdvice(values);
    setIsLoading(false);

    if (result.success && result.data) {
      setRecommendation(result.data.recommendations);
    } else {
      toast({
        variant: "destructive",
        title: "Erro",
        description: result.error,
      });
    }
  }

  return (
    <section id="ai-assistant" className="py-12 md:py-20 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">Assistente Nutricional IA</h2>
          <p className="text-lg text-muted-foreground mt-2">
            Receba recomendações de produtos personalizadas para seus objetivos.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-start">
          <Card className="w-full">
            <CardHeader>
              <CardTitle>Conte-nos sobre você</CardTitle>
              <CardDescription>
                Quanto mais detalhes, melhor será a recomendação da nossa IA.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="dietaryNeeds"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Necessidades Dietéticas</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Ex: Sou vegano, intolerante à lactose, busco perder peso..."
                            {...field}
                            rows={4}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="preferences"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Preferências de Produtos</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Ex: Gosto de snacks crocantes, prefiro bebidas doces, preciso de algo prático para o café da manhã..."
                            {...field}
                            rows={4}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" disabled={isLoading} className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                    {isLoading ? (
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    ) : (
                      <Sparkles className="mr-2 h-4 w-4" />
                    )}
                    Obter Recomendação
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
          
          <div className="flex flex-col gap-4">
            {isLoading ? (
              <Card className="w-full min-h-[300px]">
                <CardContent className="p-6 flex flex-col items-center justify-center h-full gap-4">
                  <Loader2 className="h-8 w-8 animate-spin text-primary" />
                  <p className="text-muted-foreground">Analisando suas informações...</p>
                </CardContent>
              </Card>
            ) : recommendation ? (
              <Card className="w-full bg-primary/10">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-primary">
                        <Sparkles />
                        Recomendação Personalizada
                    </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-foreground/90">
                    <p>{recommendation}</p>
                  </div>
                </CardContent>
              </Card>
            ) : (
                <div className="relative aspect-[3/4] w-full max-w-sm mx-auto rounded-lg overflow-hidden shadow-lg">
                    <Image
                    src={assistantImage.imageUrl}
                    alt={assistantImage.description}
                    fill
                    className="object-cover"
                    data-ai-hint={assistantImage.imageHint}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    />
                     <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                     <div className="absolute bottom-0 left-0 p-4 text-white">
                        <h3 className="font-bold text-lg">Sua assistente pessoal</h3>
                        <p className="text-sm">Pronta para ajudar você a fazer escolhas mais saudáveis.</p>
                     </div>
                </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
