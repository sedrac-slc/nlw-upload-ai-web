import { Github, FileVideo, Upload, Wand2 } from "lucide-react";
import { Button } from "./components/ui/button";
import { Separator } from "./components/ui/separator";
import { Textarea } from "./components/ui/textarea";
import { Label } from "./components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./components/ui/select";
import { Slider } from "./components/ui/slider";

export function App() {
  return (
    <section className="min-h-screen flex flex-col">
      <header className="px-6 py-3 flex items-center justify-between border-b">
        <h1 className="text-xl font-bold">upload.ai</h1>
        <div className="flex items-center gap-3">
          <span className="text-sm text-muted-foreground">
            Desenvolvido com 💓 pelo slc@prog
          </span>
          <Separator orientation="vertical" className="h-6" />
          <Button variant={"outline"}>
            <Github className="w-4 h-4 mr-2" />
            <span>GitHub</span>
          </Button>
        </div>
      </header>
      <main className="flex-1 p-6 flex gap-6">
        <div className="flex flex-col flex-1 gap-4">
          <div className="grid grid-rows-2 gap-4 flex-1">
            <Textarea
              className="resize-none p-4 leading-relaxed"
              placeholder="Inclua o prompt para a IA..."
            />
            <Textarea
              className="resize-none p-4 leading-relaxed"
              placeholder="Resultado gerado pelo IA..."
              readOnly
            />
          </div>
          <p>
            Lembra-se: de utilizar a variavel{" "}
            <code className="text-violet-400">{"{transition}"}</code> no seu
            prompt para adicionar o conteúdo na transição do video
          </p>
        </div>
        <aside className="w-80 space-y-6">
          <form className="space-y-6">
            <label
              htmlFor="video"
              className="flex flex-col gap-2 items-center justify-center border rounded-md aspect-video cursor-pointer border-dashed text-start text-muted-foreground hover:bg-primary/5"
            >
              <FileVideo className="h-4 w-4" />
              <span>Seleciona um video</span>
            </label>
            <input
              type="file"
              id="video"
              accept="video/mp4"
              className="sr-only"
            />
            <Separator />
            <div className="space-y-2">
              <Label htmlFor="transition_prompt">Prompt de transição</Label>
              <Textarea
                id="transition_prompt"
                className="h-20 leading-relaxed resize-none"
                placeholder="Inclua as palavras mencionadas no video separados por vírgula (,)"
              />
            </div>
            <Button type="submit" className="w-full">
              <span>Carregar Video</span>
              <Upload className="w-4 h-4 ml-2" />
            </Button>
          </form>
          <Separator />
          <form className="space-y-6">
            <div className="space-y-2">
              <Label>Prompt</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Seleciona um prompt"/>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="til">Título</SelectItem>
                  <SelectItem value="des">Descrição</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>Modelo</Label>
              <Select defaultValue="gpt" disabled>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="gpt">GPT 3.5 turbo</SelectItem>
                </SelectContent>
              </Select>
              <span className="block text-xs text-muted-foreground italic">
                Terás esta opção activa brevemente
              </span>
            </div>
            <Separator />
            <div className="space-y-4">
              <Label>Temperatura</Label>
              <Slider min={0} max={1} step={0.1} />
              <span className="block text-xs text-muted-foreground italic">
                Valores mais alto tende a deixar os resultados mais criativo e
                com possíveis erros
              </span>
            </div>
            <Separator />
            <Button type="submit" className="w-full">
              <span>Executar</span>
              <Wand2 className="w-4 h-4 ml-2" />
            </Button>
          </form>
        </aside>
      </main>
    </section>
  );
}
